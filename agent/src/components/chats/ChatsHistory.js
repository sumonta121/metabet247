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
const ChatsHistory = () => {

const token = localStorage.getItem("jwtToken");
const decodedToken = jwt_decode(token);
const userInfo = decodedToken;
const user_id = userInfo.user_id;
const role_as = userInfo.role_as;

console.log(role_as);

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
        const response = await axios.get(`${apiConfig.baseURL}/api/commonData/master_agent_list`, {
            params: {
                user_id: user_id,
                role_as: role_as
            }
        });   
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
     <div id="main-wrapper">
    <Navbar />
    <HeaderRight />
    <LeftSidebar />
      <div className="content-body" style={{ paddingTop:'0px'}}>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Chat Lists</h4>
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
                        {agentdata.length > 0 ? (
                          agentdata.map((item, index) => (
                            <tr className="tb1" key={item.id}>
                              <td>
                                <span className="text1">{index + 1}</span>
                              </td>
                              <td>{item.user_id}</td>
                              <td>
                                <Link to={`/chat-with/${item.user_id}`} style={{ backgroundColor: '#ff000000' }}>
                                  <img
                                    style={{ maxHeight: '50px' }}
                                    src="https://cdn-icons-png.freepik.com/512/5962/5962463.png"
                                    alt="Chat Icon"
                                  />
                                </Link>                              
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3">Loading...</td>
                          </tr>
                        )}

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
      </div>
    </>
  );
};


export default ChatsHistory;
