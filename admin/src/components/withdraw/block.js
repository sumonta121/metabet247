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


const WithdrawBlock = () => {
  let history = useHistory();

  //setting state paginate
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    // getAllUser();
    getPaginatedUsers();
  }, []);

  //fetching all table data
  const getAllUser = () => {
    fetch(`${apiConfig.baseURL}/api/agent/withdrawBlock`, {
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
    fetch(
      `${apiConfig.baseURL}/api/agent/paginatedwithdrawBlock?page=${currentPage.current}&limit=${limit}`,
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
                <h4 className="card-title"> Withdraw Block List</h4>
                <b>
                  <span>
                    {" "}
                    Payment Type: 0=Bkash, 1=Nagad, 2=Rocket, 3=Upay, 4=Bank
                    Number
                  </span>
                </b>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                          {/* <th>SL</th> */}
                          <th>Agent Email</th>
                          <th>Amount</th>
                          <th>Payment Type</th>
                          <th>Account Number</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((element, id) => {
                          {
                            /* // Paid mark */
                          }

                          const handlePaid = async () => {
                            try {
                              const response = await axios.delete(
                                `/api/agent/withdrawPaid/${element._id}`
                              );
                              console.log(response.data); // Optional: Handle success message

                              if (response.status === 200) {
                                alert("Paid  Successfully");
                                // window.location.replace('/agent-index');
                                history.push("/withdraw-paid");
                              }
                            } catch (error) {
                              console.error(error); // Optional: Handle error
                            }
                          };

                          {
                            /* withdraw Rejected */
                          }

                          const withdrawRejected = async () => {
                            try {
                              const response = await axios.delete(
                                `/api/agent/withdrawRejected/${element._id}`
                              );
                              console.log(response.data); // Optional: Handle success message

                              if (response.status === 201) {
                                alert("Rejected Successfully");
                                // window.location.replace('/agent-index');
                                history.push("/withdraw-rejected");
                              }
                            } catch (error) {
                              console.error(error); // Optional: Handle error
                            }
                          };

                          {
                            /* Block */
                          }

                          const withdrawBlock = async () => {
                            try {
                              const response = await axios.delete(
                                `/api/agent/withdrawBlock/${element._id}`
                              );
                              console.log(response.data); // Optional: Handle success message

                              if (response.status === 202) {
                                alert("Block  Successfully");
                                history.push("/withdraw-block");
                              }
                            } catch (error) {
                              console.error(error); // Optional: Handle error
                            }
                          };

                          {
                            /* withdraw Pending */
                          }

                          const withdrawPending = async () => {
                            try {
                              const response = await axios.delete(
                                `/api/agent/withdrawPending/${element._id}`
                              );
                              console.log(response.data); // Optional: Handle success message

                              if (response.status === 203) {
                                alert("Pending  Successfully");
                                // window.location.replace('/agent-index');
                                history.push("/withdraw-pending");
                              }
                            } catch (error) {
                              console.error(error); // Optional: Handle error
                            }
                          };

                          return (
                            <>
                              <tr>
                                {/* <th scope="row" key={id} item={element}>
                                  {id + 1}
                                </th> */}
                                <td>{element.user_id}</td>
                                <td>{element.amount}</td>
                                <td>{element.payment}</td>
                                <td>{element.acc_number}</td>

                                <td>
                                  <div className="d-flex">

                                    {/* <button
                                      onClick={handlePaid}
                                      className="btn btn-success shadow btn-xs sharp"
                                    >
                                      <i class="fa-solid fa-check"></i>
                                    </button>{" "}
                                    &nbsp; &nbsp;
                                  
                                    <button
                                      onClick={withdrawRejected}
                                      className="btn btn-warning shadow btn-xs sharp"
                                    >
                                      <i class="fa-solid fa-xmark"></i>
                                    </button>{" "}
                                    &nbsp; &nbsp;
                                    <button
                                      onClick={withdrawBlock}
                                      className="btn btn-danger shadow btn-xs sharp"
                                    >
                                      <i class="fa-solid fa-lock"></i>
                                    </button>{" "} */}
                                    
                                    &nbsp; &nbsp;
                                    <button
                                      onClick={withdrawPending}
                                      className="btn btn-primary shadow btn-xs sharp"
                                    >
                                      <i
                                        class="fa-solid fa-clock"
                                        aria-hidden="true"
                                      ></i>
                                    </button>

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

                    {/* <input placeholder="Limit" onChange={(e) => setLimit(e.target.value)}
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

export default WithdrawBlock;
