import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import apiConfig from '../apiConfig'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Daily_deposit = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef(1);

  // Calendar state
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getPaginatedUsers();
  }, [limit, startDate, endDate]);

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  };

  const changeLimit = () => {
    currentPage.current = 1;
    getPaginatedUsers();
  };

  const getPaginatedUsers = () => {
    const formattedStartDate = startDate ? startDate.toISOString() : "";
    const formattedEndDate = endDate ? endDate.toISOString() : "";
    fetch(
      `${apiConfig.baseURL}/api/agent/daily_withdraw?page=${currentPage.current}&limit=${limit}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPageCount(data.pageCount);
        const sortedData = data.result.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setData(sortedData);
      });
  };


      
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
        };

        const timeString = date.toLocaleString('en-US', options);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);

        return `${timeString.toLowerCase()} ${day}/${month}/${year}`;
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
    .page-link {
      background: #26B19B;
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
            <h4 className="card-title">Daily Withdraw Report</h4>
              <div className="card-header">

                <div className=" d-flex align-items-center">
                <div className="">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                    className="form-control"
                      dateFormat="dd/MM/yyyy"
                  />
                </div>
                <div className="">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="End Date"
                    className="form-control"
                      dateFormat="dd/MM/yyyy"
                  />
                </div>
              </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                  <thead>
                      <tr>
                          <th className="text-nowrap">User ID</th>
                          <th className="text-nowrap">Agent ID</th>
                          <th className="text-nowrap">Amount</th>
                          <th className="text-nowrap">Transaction ID</th>
                          <th className="text-nowrap">Date</th>
                          <th className="text-nowrap">Method type</th>
                       
                          <th className="text-nowrap">Status</th>
                       
                      </tr>

                      </thead>
                      <tbody>
                        {data.map((withdraw, index) => {
                          return (
                            <>
                                <tr key={index}>
                                <td className="text-nowrap">{withdraw.user_id}</td> 
                                <td className="text-nowrap">{withdraw.agent_id}</td> 
                                <td className="text-nowrap">{withdraw.withdraw_amount_in_bdt}</td> 
                                    <td className="text-nowrap">{withdraw.trxid}</td> 
                                    <td className="text-nowrap">{formatDate(withdraw.createdAt)}</td> 
                                    <td className="text-nowrap">{withdraw.selected_method}</td>
                                    <td>
                                      <button className={`btn ${withdraw.status === 'Paid' ? 'btn-success' : 'btn-danger'} `}>
                                      {withdraw.status}
                                      </button>                                    
                                    </td>
                                    
                                </tr>
                            </>
                          );
                        })}
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

export default Daily_deposit;
