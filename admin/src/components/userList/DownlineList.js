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

const DowntList = ({ match }) => {
  const down_userid = match.params.userid;

  let history = useHistory();

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(10);
  const [status, setstatus] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef(1);

  useEffect(() => {
    getPaginatedUsers();
  }, [searchQuery, limit]);

  const getPaginatedUsers = () => {
    const search = searchQuery ? `&search=${searchQuery}` : "";
    const stutus = 1;
    fetch(
      `${apiConfig.baseURL}/api/agent/downLineView?page=${currentPage.current}&limit=${limit}&down_userid=${down_userid}${search}`,
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

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
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
    .page-link{
      background:#26B19B;
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
      background-color: #26B19B !important;
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

      <div className="content-body">
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="card">
             <div className="pt-100 mt-100 card-header d-flex flex-wrap align-items-center justify-content-between">
                <h4 className="card-title mb-0">Downline List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Admin ID</th>
                          <th>Name</th>
                          <th>Balance</th>
                          <th>Status</th>
                          <th>Downline</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((element, id) => {
                          const handleDelete = async () => {
                            try {
                              const response = await axios.delete(
                                `/api/agent/deleteAgent/${element._id}`
                              );
                              if (response.status === 200) {
                                alert("Deleted Successfully");
                                getPaginatedUsers();
                              }
                            } catch (error) {
                              console.error(error);
                            }
                          };
                          return (
                            <tr key={id}>
                              <td>
                                  <Link target="_blank" className={'bg-white'} to={`/down-list/${element.user_id}`}>
                                    {element.user_id}
                                  </Link> 
                               </td>
                              <td>{element.first_name} ({element.handle})</td>
                              <td>{element.currency}</td>
                              <td>
                                <button className={`btn btn-${element.account_status === '2' ? 'danger' : 'success'} shadow btn-xs sharp`} >
                                  {element.account_status === '2' ? (
                                    <><i className="fa fa-times"></i> &nbsp;  </>
                                  ) : (
                                    <><i className="fa  fa-check"></i>  &nbsp; </>
                                  )}
                                </button>
                              </td>
                              <td>
                                <div className="d-flex">
                                   <Link target="_blank" className="edit-link btn btn-info shadow btn-xs sharp me-1" to={`/down-list/${element.user_id}`}>
                                    <i className="fa fa-user fa-2x"> </i>
                                  </Link> 

                                  <Link to={`/edit-super-agent/${element._id}`} className="edit-link btn btn-warning shadow btn-xs sharp me-1"> <i className="fa fa-pen fa-2x"> </i>
                                  </Link>

                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    <MyPaginate
                      breakLabel="..."
                      nextLabel="next >"
                      onPageChange={handlePageClick}
                      pageRangeDisplayed={10}
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
    </>
  );
};

export default DowntList;
