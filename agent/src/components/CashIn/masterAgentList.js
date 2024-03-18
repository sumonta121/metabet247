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
import axios from 'axios';
const MasterAgentList = () => {

const token = localStorage.getItem("jwtToken");
const decodedToken = jwt_decode(token);
const userInfo = decodedToken;
const user_id = userInfo.user_id;


  //setting state paginate
  const [agentdata, setAgentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {  
     getAllUser();   
  }, []);

 
  const getAllUser = async () => {
    setIsLoading(true);
    try {
        const response = await axios.get(`/api/commonData/master_agent_list`);         
        const newData  = response.data;
        setAgentData(newData);        
        setIsLoading(false);
    } catch (error) {
        setError(error.message);
        setIsLoading(false);
    }
};



  return (
    <>
    <Navbar />

<Chatbox />

<HeaderRight />

<LeftSidebar />
      {/* ... other components */}
      <div className="content-body">
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Master Agent List</h4>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                  
                      <table className="table">
                        <thead>
                          <th>SL</th>
                          <th>USER ID</th>
                          <th>Connect</th>
                        </thead>
                        <tbody>
                          {agentdata.map((item, index) => (
                            <tr className="tb1" key={item.id}>
                              <td>
                                <span className="text1">{index + 1}</span>
                              </td>
                              <td>{item.user_id}</td>
                              <td>
                                <a
                                  style={{ backgroundColor: '#ff000000' }}
                                  href={`https://wa.me/+${item.mobile}`}
                                  target="_blank"
                                >
                                  <img
                                    style={{ maxHeight: '50px' }}
                                    src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
                                    alt="WhatsApp Icon"
                                  />
                                </a>

                                <a
                                  style={{ backgroundColor: '#ff000000' }}
                                  href={`https://t.me/+${item.personal_mobile}`}
                                  target="_blank"
                                >
                                  <img
                                    style={{ maxHeight: '50px' }}
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968804.png"
                                    alt="Telegram Icon"
                                  />
                                </a>
                              </td>
                            </tr>
                          ))}
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


export default MasterAgentList;
