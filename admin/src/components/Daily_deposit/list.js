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
import axios from "axios";

const Daily_deposit = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const [statusFilter, setStatusFilter] = useState("pending"); 
  // Calendar state
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const currentPage = useRef(1);

  useEffect(() => {
    getPaginatedUsers();
  }, [limit, startDate, endDate, statusFilter]);


  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  };

  const changeLimit = () => {
    currentPage.current = 1;
    getPaginatedUsers();
  };

  // const getPaginatedUsers = () => {
  //   const formattedStartDate = startDate ? startDate.toISOString() : "";
  //   const formattedEndDate = endDate ? endDate.toISOString() : "";
  //   fetch(
  //     `${apiConfig.baseURL}/api/agent/daily_deposit?page=${currentPage.current}&limit=${limit}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
  //     {
  //       method: "GET",
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPageCount(data.pageCount);
  //       const sortedData = data.result.sort(
  //         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  //       );
  //       setData(sortedData);
  //     });
  // };

  
  const getPaginatedUsers = async () => {
    const formattedStartDate = startDate ? startDate.toISOString() : "";
    const formattedEndDate = endDate ? endDate.toISOString() : "";
    const statusQuery = statusFilter === "all" ? "" : `&status=${statusFilter}`;
    try {
      const response = await axios.get(
        `${apiConfig.baseURL}/api/agent/daily_deposit`, {
          params: {
            page: currentPage.current,
            limit: limit,
            status: statusFilter === 'all' ? undefined : statusFilter,
            startDate: formattedStartDate,
            endDate: formattedEndDate
          }
        }
      );
  
      if (response.status === 200) {
        const data = response.data;
        setPageCount(data.pageCount);
        
        const sortedData = data.result.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setData(sortedData);
      }
    } catch (error) {
      console.error('Error fetching paginated users:', error);
      alert('Error fetching paginated users: ' + error.message);
    }
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
            <h4 className="card-title">Daily Deposit Report</h4>
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
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="reject">Reject</option>
                    </select>
                  </div>



              </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                  <thead>
                        <tr>
                          <th className="text-nowrap">From</th>
                          <th className="text-nowrap">Amount BDT</th>
                          <th className="text-nowrap">Agent ID</th>
                          <th className="text-nowrap">Transaction ID</th>
                          <th className="text-nowrap">Date</th>
                          <th className="text-nowrap">Method type</th>
                          <th className="text-nowrap">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((deposit, index) => {
                          return (
                            <>
                                <tr key={index}>
                                <td className="text-nowrap">{deposit.user_id}</td> 
                                <td className="text-nowrap">{deposit.send_amount_in_bdt}</td> 
                                <td className="text-nowrap">{deposit.agent_id}</td> 
                                
                                    <td className="text-nowrap">{deposit.trxid}  </td> 
                                    <td className="text-nowrap">{formatDate(deposit.createdAt)}</td> 
                                    <td className="text-nowrap">{deposit.selected_method}</td>
                              
                               
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
                                </tr>
                            </>
                          );
                        })}
                      </tbody>
                  </table>

                  <MyPaginate
                    breakLabel="..."
                    nextLabel=" >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< "
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
