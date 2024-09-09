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



const EditUser = () => {

    const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    personal_mobile: "",
    refferer: "",
    currency: "",
  });
  const [password, setPassword] = useState("");
  const [tppassword, settppassword] = useState("");
  const [loading, setLoading] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTPPasswordChange = (e) => {
    settppassword(e.target.value);
  };


  useEffect(() => {
    axios.get(`${apiConfig.baseURL}/api/agent/getUserById/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.put(`${apiConfig.baseURL}/api/agent/updateUser/${id}`, {
            ...user,
            password: password || undefined,
            tppassword: tppassword || undefined,
          });

      if (response.status === 200) {
        alert(response.data.message);
        history.push("/user-index");
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
          <h4 class="card-title">Profile Profile Update</h4>
        </div>
        <div class="card-body">
          <div class="basic-form">
         
          {loading ? (
            <p>Loading...</p>
          ) : (
            <form  onSubmit={handleSubmit}>

                <div class="mb-3 row" >
                     <label>User ID:</label>
                        <div class="col-sm-9">
                        <input
                        class="form-control"
                        type="text"
                        name="user_id"
                        value={user.user_id}
                        onChange={handleChange}
                        />  
                 </div>
                </div>

                <div class="mb-3 row" >
                <label>First Name:</label>
                 <div class="col-sm-9">
                <input
                class="form-control"
                type="text"
                name="first_name"
                value={user.first_name}
                onChange={handleChange}
                />
                </div>
                </div>

                <div class="mb-3 row" >
                <label>Last Name:</label>
                 <div class="col-sm-9">
                <input
                class="form-control"
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
                />
                </div>
                </div>

                <div class="mb-3 row" >
                <label>Email:</label>
                 <div class="col-sm-9">
                <input
                class="form-control"
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                />
                </div>
                </div>

                <div class="mb-3 row" >
                <label>Mobile:</label>
                 <div class="col-sm-9">
                <input
                class="form-control"
                type="text"
                name="mobile"
                value={user.mobile}
                onChange={handleChange}
                />
                </div>
                </div>

                <div class="mb-3 row" >
                <label>Personal Mobile:</label>
                 <div class="col-sm-9">
                <input
                class="form-control"
                type="text"
                name="personal_mobile"
                value={user.personal_mobile}
                onChange={handleChange}
                />
                </div>
                </div>

                <div class="mb-3 row" >
                <label>Referrer:</label>
                 <div class="col-sm-9">
                <input
                class="form-control"
                type="text"
                name="refferer"
                value={user.refferer}
                onChange={handleChange}
                />
                </div>
                </div>

                <div class="mb-3 row" >
                    <label>Password:</label>
                    <div class="col-sm-9">
                    <input
                    class="form-control"
                    type="text"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                    </div>
                </div>
                
                <div class="mb-3 row" >
                    <label>TP Password:</label>
                    <div class="col-sm-9">
                    <input
                    class="form-control"
                    type="text"
                    name="tppassword"
                    value={tppassword}
                    onChange={handleTPPasswordChange}
                    />
                    </div>
                </div>

                <div class="mb-3 row" >
                    <label>Balance:</label>
                    <div class="col-sm-9">
                    <input
                    class="form-control"
                    type="text"
                    name="currency"
                    value={user.currency}
                    onChange={handleChange}
                    />
                    </div>
                </div>

              <div class="mb-3 row">
                <div class="col-sm-10">
                <button class="btn btn-success" type="submit">Update User</button>
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

export default EditUser;
