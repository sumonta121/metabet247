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

const AgentBalanceReport = () => {
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
      `${apiConfig.baseURL}/api/agent/paginatedAgentBalReport?page=${currentPage.current}&limit=${limit}&startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
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
            <h4 className="card-title">Transfer Report</h4>
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
                {/* <img   onClick={() => getPaginatedUsers()} src="https://cdn-icons-png.flaticon.com/32/639/639375.png" /> */}
              </div>
                <Link to="/agent-bal-tr">
                  <button type="button" className="btn btn-success float-right">
                     Transfer
                  </button>
                </Link>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                 

                  <table className="table">
                    <thead>
                      <tr>
                        <th>Agent ID</th>
                        <th>Amount</th>
                        <th>Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((element, id) => (
                        <tr key={id}>
                          <td>{element.user_id}</td>
                          <td>{element.amount}</td>
                          <td>{element.createdAt}</td>
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

export default AgentBalanceReport;
