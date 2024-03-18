// import React, { Component, useState, useEffect } from "react";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import apiConfig from '../apiConfig'; 


const BasicSettingList = () => {

  let history = useHistory();

  const [getuserdata, setUserdata] = useState([]);

  const getdata = async () => {

    const res = await fetch(`${apiConfig.baseURL}/api/users/BasicSettingList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setUserdata(sortedData);

      console.log("get data");
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
                <h4 className="card-title">Basic Setting </h4>

                {/* <Link to="/promo-code">
                  <button type="button" className="btn btn-success float-right">
                    Create PromoCode
                  </button>
                </Link> */}

              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>SL</th>
                          <th>Brand Name</th>
                          <th>Email</th>
                          <th>Support Number</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getuserdata.map((element, id) => {
                          // delete
                          const handleDelete = async () => {
                            try {
                              const response = await axios.delete(
                                `/api/agent/deleteAgent/${element._id}`
                              );
                              console.log(response.data); // Optional: Handle success message

                              if (response.status === 200) {
                                alert("Delete Successfully");
                                // window.location.replace('/agent-index');
                                history.push("/admin");
                              }
                            } catch (error) {
                              console.error(error); // Optional: Handle error
                            }
                          };

                          return (
                            <>
                              <tr>
                                <th scope="row" key={id} item={element}>
                                  {id + 1}
                                </th>
                                <td>{element.site_title}</td>
                                <td>{element.site_email}</td>
                                <td>{element.support_number}</td>

                                <td>
                                  <div className="d-flex">

                                    <Link
                                      className="edit-link btn btn-primary shadow btn-xs sharp me-1 "
                                      to={`/editbasic/${element._id}`}
                                      // to={`edit-agent/11`}
                                    >
                                      <i className="fa fa-pencil"> </i>
                                    </Link>

                                    {/* <button
                                      onClick={handleDelete}
                                      className="btn btn-danger shadow btn-xs sharp"
                                    >
                                      <i className="fa fa-trash"></i>
                                    </button> */}

                                  </div>
                                </td>

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

export default BasicSettingList;
