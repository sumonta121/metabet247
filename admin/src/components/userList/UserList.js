import React, { useEffect, useState, useRef } from "react";
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

const UserList = () => {
  let history = useHistory();

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const currentPage = useRef(1);
  const [status, setstatus] = useState(1);

  useEffect(() => {
    getPaginatedUsers();
  }, [searchQuery, limit]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getPaginatedUsers = () => {
    const search = searchQuery ? `&search=${searchQuery}` : "";
    const status = 1;
    fetch(
      `${apiConfig.baseURL}/api/agent/paginatedgetdataUser?page=${currentPage.current}&limit=${limit}&status=${status}${search}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPageCount(data.pageCount);
        setData(data.result);
      });
  };

  function handlePageClick(e) {
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  }

  const handleBlockUnblock = async (userId, action) => {
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
    .page-link{
      background:#26B19B;
    }
    li.active a {
      background-color: #0366d6;
      color: white;
    }
    li.disabled a {
      color: grey;
      background-color: #26B19B !important;
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
                <h4 className="card-title">User List</h4>
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    placeholder="Search by Name or ID"
                    className="form-control me-2"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ maxWidth: "300px" }}
                  />

                  <Link to="/inactive-user">
                    <button type="button" className="btn btn-danger">
                      Inactive 
                    </button>
                  </Link>
                  
                </div>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Balance</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Referrer</th>
                        <th>Promo Code</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((element, id) => (
                        <tr key={id}>
                          <td>{element.user_id}</td>
                          <td>{element.first_name} {element.last_name}</td>
                          <td>{element.currency}</td>
                          <td>{element.email}</td>
                          <td>{element.mobile}</td>
                          <td>{element.refferer}</td>
                          <td>{element.agent_id}</td>
                          <td>
                            <div className="d-flex">
                              <button
                                className={`btn btn-${element.account_status === '2' ? 'danger' : 'success'} shadow btn-xs sharp`}
                                onClick={() => handleBlockUnblock(element._id, element.account_status === '2' ? 'unblock' : 'block')}
                              >
                                {element.account_status === '2' ? <i className="fa fa-times"></i> : <i className="fa fa-check"></i>}
                              </button>

                              <Link
                                className="edit-link btn btn-primary shadow btn-xs sharp me-1"
                                to={`edit-user/${element._id}`}
                              >
                                <i className="fa fa-pencil"> </i>
                              </Link>
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

export default UserList;
