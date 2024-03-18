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

const AffiliateLinkShow = () => {
  let history = useHistory();

  const [getuserdata, setUserdata] = useState([]);

  const getdata = async () => {
    const res = await fetch("/api/users/AffiliateLinkLast", {
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

            <div className="card-body">
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <div className="card">
                      <h3> Custom Affiliate Link: &nbsp; <b> {element.aff_link} </b> </h3>
                    </div>
                  </>
                );
              })}

              <Link to="/affiliate-link-list">
                <button type="button" className="btn btn-success float-right">
                  back
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AffiliateLinkShow;
