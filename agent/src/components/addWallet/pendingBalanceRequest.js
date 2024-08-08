// import React, { Component, useState, useEffect } from "react";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import jwt_decode from 'jwt-decode';
import ReactPaginate from "react-paginate";
import { useRef } from "react";
import styled from "styled-components";
import apiConfig from '../apiConfig';

const List = () => {

  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const user_id = decodedToken ? decodedToken.user_id : null;
  
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
    fetch(`${apiConfig.baseURL}/api/agent/getdataUser`, {
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

  const handleApprovePayment = async (depositId, event) => {
    try {
      // Make an API call to your server to approve the payment by ID
      const response = await fetch(`${apiConfig.baseURL}/api/agent/user_transfer_update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Add Content-Type header for JSON data
        body: JSON.stringify({ depositId }), // Send depositId in request body
      });
  
      const responseData = await response.json(); // Parse the JSON response
  
      if (response.ok) {
        // Handle successful approval response (e.g., update UI, show success message)
        alert(responseData.message);
      } else {
        // Handle API call errors (e.g., display error message)
        console.error('Failed to approve payment:', responseData.message);
        alert(`Failed to approve payment: ${responseData.message}`);
      }
    } catch (error) {
      // Handle potential errors during the API call or processing
      console.error('Error approving payment:', error);
      alert('Error approving payment: ' + error.message);
    }
  };
    
  const handleRejectPayment = async (depositId, event) => {
    try {
      // Make an API call to your server to approve the payment by ID
      const response = await fetch(`${apiConfig.baseURL}/api/agent/user_transfer_reject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Add Content-Type header for JSON data
        body: JSON.stringify({ depositId }), // Send depositId in request body
      });
  
      const responseData = await response.json(); // Parse the JSON response
  
      if (response.ok) {
        // Handle successful approval response (e.g., update UI, show success message)
        alert(responseData.message);
      } else {
        // Handle API call errors (e.g., display error message)
        console.error('Failed to approve payment:', responseData.message);
        alert(`Failed to approve payment: ${responseData.message}`);
      }
    } catch (error) {
      // Handle potential errors during the API call or processing
      console.error('Error approving payment:', error);
      alert('Error approving payment: ' + error.message);
    }
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
      `${apiConfig.baseURL}/api/agent/pending_balance_request?page=${currentPage.current}&limit=${limit}&user_id=${user_id}`,
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
        background-color: #15073A !important;
    }
    li.disable,
    li.disabled a {
      cursor: default;
        background-color: #15073A !important;
    }
  `;

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
                <h4 className="card-title">User Pending Balance Request</h4>

              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                      
                        <th className="text-nowrap">Transaction ID</th>
                        <th className="text-nowrap">Date</th>
                        <th className="text-nowrap">Method type</th>
                        {/* <th className="text-nowrap">Amount </th> */}
                        <th className="text-nowrap">Amount BDT</th>
                        <th className="text-nowrap">From</th>
                        <th className="text-nowrap">TO</th>
                        <th className="text-nowrap">user ID</th>
                        <th className="text-nowrap">Status</th>
                        <th className="text-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((deposit, index) => {
                          return (
                            <>
                                <tr key={index}>
                                    <td className="text-nowrap">{deposit.trxid}  </td> 
                                    <td className="text-nowrap">{deposit.createdAt}</td> 
                                    <td className="text-nowrap">{deposit.selected_method}</td>
                                    {/* <td className="text-nowrap">${deposit.send_amount}</td>  */}
                                    <td className="text-nowrap">{deposit.send_amount_in_bdt}</td> 
                                    <td className="text-nowrap">{deposit.sender_number}</td> 
                                    <td className="text-nowrap">{deposit.agent_wallet}</td> 
                                    <td className="text-nowrap">{deposit.user_id}</td> 
                                    <td>
                                        {deposit.status === 'paid' ? (
                                          <button className="btn btn-sm btn-success">
                                            Paid
                                          </button>
                                        ) : deposit.status === 'reject' ? (
                                          <button className="btn btn-sm btn-danger">
                                            Rejected
                                          </button>
                                        ) : (
                                          <button className="btn btn-sm btn-danger">
                                            Pending
                                          </button>
                                        )}
                                    </td>
                                    <td>
                                        {deposit.status === 'paid' ? (
                                          <button></button>
                                        ) : deposit.status === 'reject' ? (
                                          <button></button>
                                        ) : (
                                        <>  
                                          <a
                                            href="#"
                                            className="btn btn-success shadow btn-xs sharp me-1"
                                            onClick={() => handleApprovePayment(deposit._id)} 
                                          ><i className="fa fa-check"></i></a>   
                                          <a
                                            href="#"
                                            className="btn btn-danger shadow btn-xs sharp me-1"
                                            onClick={() => handleRejectPayment(deposit._id)} 
                                          ><i className="fa fa-times"></i></a> 
                                        </>
                                        )}
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
      </div>
    </>
  );
};

export default List;
