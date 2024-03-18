// import React, { Component, useState, useEffect } from "react";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig';

const BlFromAdminReport = () => {
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;
  // console.log(Agentcurrency);

  // <input type="hidden" name="user_id" value={userInfo.user_id} />;

  const [getuserdata, setUserdata] = useState([]);
  const getdata = async () => {
  const user_id = userInfo.user_id;
    const res = await fetch(`${apiConfig.baseURL}/api/agent/BlFromAdmin/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    // console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setUserdata(sortedData);
      //   setUserdata(data);
      console.log("get data");
      return user_id;
      // console.log("Id: " + user_id);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

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
                <h4 className="card-title">
                  {" "}
                  Balance Receive from Admin Report{" "}
                </h4>

                {/* <Link to="/agent-bal-tr">
                  <button type="button" className="btn btn-success float-right">
                    Balance Transfer{" "}
                  </button>
                </Link>
                 */}
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>SL</th>
                          <th> ID</th>
                          <th>Amount</th>
                          <th>Activity</th>
                          {/* <th>Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {getuserdata.map((element, id) => {
                          return (
                            <>
                              <tr>
                                <th scope="row" key={id} item={element}>
                                  {id + 1}
                                </th>
                                <td>{element.user_id}</td>
                                <td>{element.amount}</td>
                                <td>{element.createdAt}</td>

                                {/* <td>
                                  <div className="d-flex">
                                    <a
                                      href="#"
                                      className="btn btn-primary shadow btn-xs sharp me-1"
                                    >
                                      <i className="fa fa-pencil"></i>
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-danger shadow btn-xs sharp"
                                    >
                                      <i className="fa fa-trash"></i>
                                    </a>
                                  </div>
                                </td> */}
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
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

export default BlFromAdminReport;
