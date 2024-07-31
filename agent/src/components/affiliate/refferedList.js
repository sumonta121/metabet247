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
import jwt_decode from "jwt-decode";
import ReactPaginate from "react-paginate";
import { useRef } from "react";
import styled from "styled-components";
import apiConfig from '../apiConfig';


const RefferedList = () => {
  let history = useHistory();

  //setting state paginate
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();



    const [users, setUsers] = useState([]); // State to hold user data
    const [isLoading, setIsLoading] = useState(false); // State to indicate loading status
    const [error, setError] = useState(null); // State to hold any errors
  
  
    
  useEffect(() => {
    currentPage.current = 1;
    // getAllUser();
    getPaginatedUsers();
  }, []);

  //fetching all table data
  const getAllUser = () => {
    fetch(`${apiConfig.baseURL}/api/agent/reffered_list`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");

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
    
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;

  fetch(
      `${apiConfig.baseURL}/api/agent/reffered_list?page=${currentPage.current}&limit=${limit}&user_id=${user_id}`,
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
       background-color: #5a4693 !important;
    }
   
    li.disable,
    li.disabled a {
      cursor: default;
    }
  `;


  
  const handleBlockUnblock = async (userId, action) => {
    try {
      const response = await axios.put(`${apiConfig.baseURL}/api/agent/${action}/${userId}`); // Replace with your API endpoint

      if (response.status === 200) {
        // Update user data locally (optional for immediate UI feedback)
        const updatedUsers = users.map(user =>
          user._id === userId ? { ...user, isBlocked: action === 'block' } : user
        );
        setUsers(updatedUsers);
        alert(response.data.message);
        history.push("/reffered-list");
      } else {
        console.error('Error blocking/unblocking user:', response.data);
        setError('Failed to block/unblock user. Please try again later.'); // More user-friendly error message
      }
    } catch (error) {
      console.error('Error during blocking/unblocking:', error);
      setError('Failed to block/unblock user. Please try again later.'); // More user-friendly error message
    }
  };


  return (
    <>
     <div id="main-wrapper">
      <Navbar />

      <Chatbox />

      <HeaderRight />

      <LeftSidebar />

      <div class="content-body">
        <div class="container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Reffered User List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>User ID</th>
                         
                          <th>Mobile Number</th>
                          <th> Balance</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((element, id) => {

                            const handleDelete = async () => {
                              const userConfirmed = window.confirm("Are you sure you want to delete this entry?");
                              if (userConfirmed) {
                                try {
                                  const response = await axios.delete(
                                    `/api/agent/deleteAffiliate/${element._id}`
                                  );
                                  console.log(response.data); // Optional: Handle success message

                                  if (response.status === 200) {
                                    alert("Delete Successfully");
                                    // window.location.replace('/affiliate-index');
                                    history.push("/agent");
                                  }
                                } catch (error) {
                                  console.error(error); // Optional: Handle error
                                }
                              }
                            };

                            return (
                            <>
                              <tr>
                                <td>{element.user_id}</td>
                                <td>{element.mobile}</td>
                                <td>{element.currency}</td>
                                <td>
                                  <button
                                    className={`btn btn-${element.account_status === '2' ? 'danger' : 'success'} shadow btn-xs sharp`}
                                    onClick={() => handleBlockUnblock(element._id, element.account_status === '2' ? 'block' : 'block')}
                                  >
                                    {element.account_status === '2' ? (
                                      <>
                                        <i className="fa fa-times"></i> &nbsp;  Inactive
                                      </>
                                    ) : (
                                      <>
                                      <i className="fa  fa-check"></i>  &nbsp; Active
                                      </>
                                    )}
                                  </button>
                                </td>

                                {/* <td>{element.status}</td> */}
                                {/* <td>
                                  <div className="d-flex">
                                    <Link
                                      className="edit-link btn btn-primary shadow btn-xs sharp me-1"
                                      to={`/editAffiliate/${element._id}`}
                                      // to={`edit-agent/11`}
                                    ><i className="fa fa-pencil"> </i>
                                    </Link>
                                     <button
                                      onClick={handleDelete}
                                      className="btn btn-danger shadow btn-xs sharp"
                                    >
                                      <i className="fa fa-trash"></i>
                                    </button>
                                  </div>
                                </td> */}
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
                      pageRangeDisplayed={5}
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
       </div>
    </>
  );
};

export default RefferedList;
