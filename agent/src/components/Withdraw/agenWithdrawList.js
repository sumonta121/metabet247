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

const WithdrawList = () => {

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

  const handleApprovePayment = async (depositId,status, event) => {
   
    try {

      const response = await fetch(`${apiConfig.baseURL}/api/agent/user_withdraw_update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ depositId,status }), 
      });
  
      const responseData = await response.json(); 
  
      if (response.ok) {
        
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
      `${apiConfig.baseURL}/api/agent/pending_agent_withdraw?page=${currentPage.current}&limit=${limit}&user_id=${user_id}`,
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
                <h4 className="card-title">Balance Withdraw Request</h4>
                <Link to="/balance-withdraw">
                  <button type="button" className="btn btn-success float-right">
                   Make Withdraw
                  </button>
                </Link>
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
                          <th className="text-nowrap">Wallet</th>
                          <th className="text-nowrap">Amount USD</th>
                          <th className="text-nowrap">Net Amount USD</th>
                          <th className="text-nowrap">Country Agent ID</th>
                          <th className="text-nowrap">Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {data.map((withdraw, index) => (
                            <tr key={index}>
                              <td className="text-nowrap">{withdraw.transaction_id}</td>
                              <td className="text-nowrap">{withdraw.createdAt}</td>
                              <td className="text-nowrap">
                              {withdraw.payment === 1 && 'bkash'}
                              {withdraw.payment === 2 && 'Nagad'}
                              {withdraw.payment === 3 && 'Rocket'}
                              {withdraw.payment === 4 && 'Binance Pay'}
                               </td>
                              <td className="text-nowrap">{withdraw.acc_number}</td>
                              <td className="text-nowrap">${withdraw.amount}</td>
                              <td className="text-nowrap">${withdraw.pay_amount}</td>
                              <td className="text-nowrap">{withdraw.receiver_user_id}</td>
                              <td>
                                <button 
                                  className={`btn ${withdraw.status_type === 1 ? 'btn-success' : 'btn-danger'}`}
                                >
                               
                                  {withdraw.status_type === 0 ? 'Pending' : withdraw.status_type === 1 ? 'Paid' : withdraw.status_type === 2 ? 'Rejected' : ''}
                                </button>
                              </td>
                            </tr>
                          ))}

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

export default WithdrawList;
