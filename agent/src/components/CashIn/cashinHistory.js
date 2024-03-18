// import React, { Component, useState, useEffect } from "react";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import jwt_decode from "jwt-decode";
import ReactPaginate from "react-paginate";
import { useRef } from "react";
import styled from "styled-components";
import apiConfig from '../apiConfig';
 
const CashinHistory = () => {

const token = localStorage.getItem("jwtToken");
const decodedToken = jwt_decode(token);
const userInfo = decodedToken;
const user_id = userInfo.user_id;




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
    fetch(`${apiConfig.baseURL}/api/agent/UserBalanceReport`, {
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
      `${apiConfig.baseURL}/api/withdraw/resellerWithdraw/${user_id}?page=${currentPage.current}&limit=${limit}`,
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
                <h4 className="card-title">Cashn In History</h4>
                <Link to="/cashin" className="btn btn-info float-right">Cash In</Link>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                        <th>SL</th>
                        <th>Amount</th>
                        <th>Pay Amount</th>
                        <th>User ID</th>                        
                        <th>Transaction ID</th>                        
                        <th>Voucher ID</th>                        
                        <th>Date</th>
                        <th>Status</th>     
                      </thead>
                      <tbody>
                      {data.map((item,index) => (
                              <tr className="tb1"  key={item.id}>
                                  <td>
                                      <span className="text1">{index+1}</span>
                                  </td>
                                  <td>{item.amount}</td>
                                  <td>{item.pay_amount}</td>
                                  <td>{item.user_id}</td>
                                  <td>{item.transaction_id}</td>
                                  <td>{item.voucher}</td>
                                  <td>{item.createdAt}</td>
                                  <td>  
                                     <span className={`btn btn-sm ${item.status_type === 0 ? 'btn-info' : item.status_type === 1 ? 'btn-success' : 'btn-danger'}`}>
                                        {item.status_type === 0 ? 'Pending' : item.status_type === 1 ? 'Paid' : 'Rejected'}
                                      </span>
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

export default CashinHistory;
