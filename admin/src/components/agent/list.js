// import React, { Component, useState, useEffect } from "react";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useRef } from "react";
import styled from "styled-components";
import apiConfig from '../apiConfig';
const AgentList = ({ userData }) => {
  let history = useHistory();

  //setting state paginate
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    getPaginatedUsers();
  }, []);


  const getAllUser = () => {
      fetch(`${apiConfig.baseURL}/api/agent/getdataAgent`, {
        method: "GET",
      })
      .then((res) => res.json())
      .then((data) => {
       // console.log(data, "userData");
        const sortedData = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
        // setData(data.data);
      });
  };

  //pagination
  function handlePageClick(e) {
    console.log(e);
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  }
  
  function changeLimit() {
    currentPage.current = 1;
    getPaginatedUsers();
  }

  function getPaginatedUsers() {
    fetch(
      `${apiConfig.baseURL}/api/agent/paginatedAgent?page=${currentPage.current}&limit=${limit}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setPageCount(data.pageCount);

        const sortedData = data.result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
        // setData(data.result);

      });
  }

  // css
  const MyPaginate = styled(ReactPaginate).attrs({
    // You can redefine classes here, if you want.
    activeClassName: "active", // default to "selected"
  })`
      margin-bottom: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      list-style-type: none;
      padding: 0 2rem;
  

    li a {
      border-radius: 7px;
      padding: 0.1rem 1rem;
      border: gray 1px solid;
      cursor: pointer;
      margin: 0 5px;
    }
    li.previous a,
    li.next a,
    li.break a {
      border-color: transparent;
    }
    li.active a {
      background-color: #0366d6;
      border-color: transparent;
      color: white;
      min-width: 32px;
    }
    li.disabled a {
      color: grey;
      background-color: #26B19B !important;
    }
    li.disable,
    li.disabled a {
      cursor: default;
    }
  `;

  return (
    <>
      <Navbar />

      <Chatbox />

      <HeaderRight />

      <LeftSidebar />

      <div class="content-body">
        <div class="container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Admin  List</h4>

                <Link to="/agent-create">
                  <button type="button" className="btn btn-success float-right">
                    Create Admin 
                  </button>
                </Link>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                          {/* <th>SL</th> */}
                          <th>Admin ID</th>
                          <th>Email</th>
                          <th>Balance</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((element, id) => {
                          // delete
                          const handleDelete = async () => {
                            try {
                              const response = await axios.delete(
                                `/api/agent/deleteAgent/${element._id}`
                              );
                              if (response.status === 200) {
                                alert("Delete Successfully");
                                history.push("/admin");
                              }
                            } catch (error) {
                              console.error(error); 
                            }
                          };

                          return (
                            <>
                              <tr>
                             
                                <td>{element.user_id}</td>
                                <td>{element.email}</td>
                                <td>{element.currency}</td>
                                <td>Admin</td>
                                <td>
                                  <div className="d-flex">
                                    <Link className="edit-link btn btn-primary shadow btn-xs sharp me-1 "
                                      to={`/editagent/${element._id}`}
                                    >
                                      <i className="fa fa-pencil"> </i>
                                    </Link>
                                     {/* <button
                                      onClick={handleDelete}
                                      className="btn btn-danger shadow btn-xs sharp"
                                    >
                                      <i className="fa fa-trash"></i>
                                    </button>  */}
                                  </div>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>

                    {/*  paginate */}

                    <MyPaginate
                      breakLabel="..."
                      nextLabel="next >"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={10}
                      pageCount={pageCount}
                      previousLabel="< previous"
                      renderOnZeroPageCount={null}
                      marginPagesDisplayed={2}
                      containerClassName="pagination justify-content-center"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      activeClassName="active"
                      forcePage={currentPage.current - 1}
                    />
                    
                    {/* Page Sorting  */}

                    {/* <input
                      placeholder="Limit"
                      onChange={(e) => setLimit(e.target.value)}
                    />
                    <button onClick={changeLimit}>Set Limit</button> */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AgentList;
