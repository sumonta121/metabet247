import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import jwt_decode from "jwt-decode";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import apiConfig from '../apiConfig';

const AgentBalanceReport = () => {
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_role = userInfo.role_as;
  const userid = userInfo.user_id;

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    getPaginatedUsers(userid);
  }, [userid]);

  function handlePageClick(e) {
    currentPage.current = e.selected + 1;
    getPaginatedUsers(userid);
  }

  function getPaginatedUsers(userid) {
    fetch(
      `${apiConfig.baseURL}/api/agent/paginatedAgentBalanceTransferReport?page=${currentPage.current}&limit=${limit}&userid=${userid}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPageCount(data.pageCount);
        const sortedData = data.result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
      });
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
    }
    li.disable,
    li.disabled a {
      cursor: default;
    }
  `;

  return (
    <>
     <div id="main-wrapper">
      <Navbar />
      <Chatbox />
      <HeaderRight />
      <LeftSidebar />

      <div className="content-body">
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Transfer History</h4>
                <Link to="/user-bal-tr">
                  <button type="button" className="btn btn-success float-right">
                    Send Money
                  </button>
                </Link>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>User ID</th>
                          <th>Amount</th>
                          <th>Date & Time</th>
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

export default AgentBalanceReport;
