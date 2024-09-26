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
import axios from 'axios'; 

const List = () => {

  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const user_id = decodedToken ? decodedToken.user_id : null;
  const [statusFilter, setStatusFilter] = useState("Pending"); 
  //setting state paginate
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    getPaginatedUsers();
  }, [statusFilter,limit]);


  const handleApprovePayment = async (depositId, status, event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiConfig.baseURL}/api/agent/user_withdraw_update`, {
        depositId, status
      });
    
      if (response.status === 200) {
        alert(response.data.message);
        getPaginatedUsers();  
      } else {
        console.error('Failed to approve payment:', response.data.message);
        alert(`Failed to approve payment: ${response.data.message}`);
      }
    } catch (error) {
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


  async function getPaginatedUsers() {
    const statusQuery = statusFilter === "all" ? "" : `&status=${statusFilter}`;
    try {
      const response = await axios.get(
        `${apiConfig.baseURL}/api/agent/pending_withdraw_request`, {
          params: {
            page: currentPage.current,
            limit: limit,
            user_id: user_id,
            status: statusFilter === 'all' ? undefined : statusFilter
          }
        }
      );
      const sortedData = response.data.result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setData(sortedData);
      setPageCount(response.data.pageCount);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

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
        background-color: #15073A !important;
    }
    li.disable,
    li.disabled a {
      cursor: default;
        background-color: #15073A !important;
    }
  `;
  
  
  const formatTimestamp = (timestamp) => {
    let date;
    if (timestamp !== undefined && timestamp !== null) {
        date = new Date(timestamp);
    } else {
        date = new Date(); 
    }

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    }).toLowerCase();

    if (date.toDateString() === today.toDateString()) {
        return formattedTime;
    } else if (date.toDateString() === yesterday.toDateString()) {
        return `${formattedTime} Yesterday`;
    } else {
        const diffInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
        if (diffInDays === 1) {
            return `${formattedTime} Yesterday`;
        } else if (diffInDays <= 7) {
            return `${formattedTime} ${diffInDays} days ago`;
        } else {
            const formattedDate = date.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: '2-digit'
            }).replace(/\//g, '.');
            return `${formattedTime} ${formattedDate}`;
        }
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
                <h4 className="card-title"> Pending Withdraw </h4>
                <div className="col">
                    <select value={limit} onChange={(e) => setLimit(e.target.value)}>
                      <option value="">Sort</option>
                      <option value="30">30</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                  
                  <div className="col">
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                      <option value="">Select Sorting</option>
                      <option value="Pending">Pending</option>
                      <option value="Paid">Paid</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </div>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                      <tr>
                          <th className="text-nowrap">User ID</th>
                          <th className="text-nowrap">Transaction ID</th>
                          <th className="text-nowrap">Date</th>
                          <th className="text-nowrap">Method type</th>
                          <th className="text-nowrap">Amount BDT</th>
                          <th className="text-nowrap">From</th>
                          <th className="text-nowrap">Status</th>
                          <th className="text-nowrap">Action</th>
                      </tr>

                      </thead>
                      <tbody>
                        {data.map((withdraw, index) => {
                          return (
                            <>
                                <tr key={index}>
                                    <td className="text-nowrap">{withdraw.user_id}</td> 
                                    <td className="text-nowrap">{withdraw.trxid}</td> 
                                    <td className="text-nowrap">{ formatTimestamp(withdraw.createdAt) }</td> 
                                    <td className="text-nowrap">{withdraw.selected_method}</td>
                                    <td className="text-nowrap">{withdraw.withdraw_amount}</td> 
                                    {/*  <td className="text-nowrap">{withdraw.chargedAmount}</td> 
                                     <td className="text-nowrap">{withdraw.withdraw_amount_in_bdt}</td>  */}
                                    <td className="text-nowrap">{withdraw.sender_number}</td> 
                                    <td>
                                      <button className={`btn btn-sm ${withdraw.status === 'Paid' ? 'btn-success' : 'btn-danger'} `}>
                                      {withdraw.status}
                                      </button>                                    
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                        <button
                                          type="button"
                                          disabled={withdraw.status != 'Pending'}
                                          className="btn btn-success shadow btn-xs sharp me-1"
                                          onClick={(event) => handleApprovePayment(withdraw._id,'Paid',event)} 
                                         >
                                          <i className="fa fa-check"></i>
                                        </button>
                                        <button
                                          type="button"
                                          disabled={withdraw.status != 'Pending'}
                                          className="btn btn-danger shadow btn-xs sharp me-1"
                                          onClick={(event) => handleApprovePayment(withdraw._id,'Reject',event)} 
                                         >
                                          <i className="fa fa-times"></i>
                                        </button>
                                      </div>
                                   </td>
                                </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                    <MyPaginate
                      breakLabel="..."
                      nextLabel=">"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={5}
                      pageCount={pageCount}
                      previousLabel="<"
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
      </div>
      <Footer />
      </div>
    </>
  );
};

export default List;
