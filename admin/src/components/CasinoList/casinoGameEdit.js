// EditUser.js
// import React, { Component, useState, useEffect } from "react";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import axios from "axios";
import { useParams, Redirect, useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useRef } from "react";
import styled from "styled-components";
import apiConfig from '../apiConfig';



const CasinoGameEdit = ({ match }) => {
    const Id = match.params._id;
    let history = useHistory();

    const [user, setUser] = useState({
        name: "",
        provider: "",
        type: "",
    });

    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${apiConfig.baseURL}/api/casino/casinoGameInfo/${Id}`)
          .then((response) => {
            setUser(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      }, [Id]);


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
          const response = await axios.put(`${apiConfig.baseURL}/api/casino/casinoGameUpdate/${Id}`, {
            ...user,
          });

      if (response.status === 200) {
        alert(response.data.message);
        history.push("/casino-list");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
  
<>
<Navbar />

<Chatbox />

<HeaderRight />

<LeftSidebar />

<div class="content-body">
  <div class="container-fluid">
    <div class=" col-lg-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Casino Games Update</h4>
        </div>
        <div class="card-body">
          <div class="basic-form">
         
          {loading ? (
            <p>Loading...</p>
          ) : (
            <form  onSubmit={handleSubmit}>

                <div class="mb-3 row" >
                     <label>Name:</label>
                      <div class="col-sm-12">
                        <input class="form-control" type="text" name="name" value={user.name} onChange={handleChange} />  
                      </div>
                </div>
                
                <div class="mb-3 row" >
                     <label>Provider:</label>
                      <div class="col-sm-12">
                        <input class="form-control" type="text" name="provider" value={user.provider} onChange={handleChange} />  
                      </div>
                </div>

                <div class="mb-3 row" >
                     <label>type:</label>
                      <div class="col-sm-12">
                        <input class="form-control" type="text" name="type" value={user.type} onChange={handleChange} />  
                      </div>
                </div>

              <div class="mb-3 row" align="right">
                <div class="col-sm-12">
                  <button class="btn btn-success" type="submit">Update</button>
                </div>
              </div>
            </form>
             )
            }
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

export default CasinoGameEdit;
