import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import axios from "axios";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import apiConfig from '../apiConfig';
import jwt_decode from "jwt-decode";

const SuperAgentList = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const [userid, setUserId] = useState(null);
  const [status, setstatus] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    const token = localStorage.getItem("jwtToken");
    const decodedToken = jwt_decode(token);
    const userInfo = decodedToken;

    setUserId(userInfo.user_id);
    getPaginatedUsers();
  }, [searchTerm]); // Add searchTerm to the dependencies

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  };

  const changeLimit = () => {
    currentPage.current = 1;
    getPaginatedUsers();
  };

  const getPaginatedUsers = () => {
    const token = localStorage.getItem("jwtToken");
    const decodedToken = jwt_decode(token);
    const userInfo = decodedToken;
    const referrerid = userInfo.user_id;
    const status = 1;

    fetch(
      `${apiConfig.baseURL}/api/agent/paginatedAffiliate?page=${currentPage.current}&limit=${limit}&status=${status}&referrerid=${referrerid}&search=${searchTerm}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        setPageCount(data.pageCount);
        const sortedData = data.result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
      });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBlockUnblock = async (userId, action) => {
    const isConfirmed = window.confirm("Are you sure you want to Block / Unbloc the user?");
    if (!isConfirmed) {
      return;
    }
    
    try {
      const response = await axios.put(`${apiConfig.baseURL}/api/agent/${action}/${userId}`);
      if (response.status === 200) {
        getPaginatedUsers();
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during blocking/unblocking:', error);
    }
  };

  const MyPaginate = styled(ReactPaginate).attrs({
    activeClassName: "active",
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
      background: #2f1d5e !important;
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

      <div className="content-body">
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="card">

              <div className="card-header d-flex flex-wrap align-items-center justify-content-between">
                <h4 className="card-title">Master Agent List</h4>
                 <div className="d-flex align-items-center">
                  <Link to="/inactive-affiliate">
                    <button type="button" className="btn btn-danger">
                      Inactive 
                    </button>
                  </Link>
                  <input
                    type="text"
                    placeholder="Search by Name or ID"
                    className="form-control me-2"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ maxWidth: "300px" }}
                  />
                  <Link to="/affiliate-create">
                    <button type="button" className="btn btn-success float-right">
                      Create 
                    </button>
                  </Link>
                </div>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Super Agent ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Balance</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((element, id) => (
                        <tr key={id}>
                          <td>{element.user_id}</td>
                          <td>{element.first_name} ({element.handle})</td>
                          <td>{element.mobile}</td>
                          <td>{element.currency}</td>
                          <td>
                            <div className="d-flex">
                              <Link
                                className="edit-link btn btn-primary shadow btn-xs sharp me-1 "
                                to={`/editAffiliate/${element._id}`}
                                // to={`edit-agent/11`}
                              >
                                <i className="fa fa-pencil"> </i>
                              </Link>

                              <button
                                className={`btn btn-${element.account_status === '2' ? 'danger' : 'success'} shadow btn-xs sharp`}
                                onClick={() => handleBlockUnblock(element._id, element.account_status === '2' ? 'block' : 'block')}
                              >
                                {element.account_status === '2' ? <i className="fa fa-times"></i> : <i className="fa fa-check"></i>}
                              </button>

                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

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

export default SuperAgentList;
