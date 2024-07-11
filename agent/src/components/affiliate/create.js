import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
// import  { useHistory  } from 'react-router-dom'
import apiConfig from '../apiConfig';

const AffiliateCreate = () => {

  let history = useHistory();

  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  // const adminCurrency = userInfo.currency;

  const [inpval, setINP] = useState({
    referrer: userInfo.user_id,
    handle: "",
    email: "",
    password: "",
    mobile: "",
    personal_mobile: "",
    address: "",
    ref_percentage: 0,
    deposit_percentage: 0,
    
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const { referrer, handle, email, password, mobile,personal_mobile,address, ref_percentage, deposit_percentage } = inpval;
    const res = await fetch(`${apiConfig.baseURL}/api/agent/affiliate_create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        referrer,
        handle,
        email,
        password,
        mobile,
        personal_mobile,
        address,
        ref_percentage, 
        deposit_percentage
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Created Successfully");
      history.push("/affiliate-index");
    } else {
      if (data.email) {
        // alert(data.email);
      }
      console.log(res.status);
    }

    if (res.status === 400) {
      alert("A user has already registered with this address");
      // console.log("Data Inserted successfully");
    }
    if (res.status === 401) {
      alert("Fillup All field & Password between 6-30 chars");
      // console.log("Data Inserted successfully");
    }
  };

  return (
    <>
     <div id="main-wrapper">
      <Navbar />

      <Chatbox />

      <HeaderRight />

      <LeftSidebar />

      <div class="content-body">
        <div class="container-fluid">
          <div class=" col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Master Agent Create</h4>

                <Link to="/affiliate-index">
                  <button type="button" className="btn btn-success float-right">
                  Agent List{" "}
                  </button>
                </Link>
              </div>
              <div class="card-body">
                <div class="basic-form">
                  <form>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Master Agent Name</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="handle"
                          class="form-control"
                          placeholder="Name"
                          onChange={setdata}
                          value={inpval.handle}
                        />
                      </div>
                    </div>
                    
                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Agent Email</label>
                      <div class="col-sm-9">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Enter Your Valid Email Address"
                          onChange={setdata}
                          value={inpval.email}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Password</label>
                      <div class="col-sm-9">
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          placeholder="Password"
                          onChange={setdata}
                          value={inpval.password}
                        />
                      </div>
                    </div>
                    
                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">WTSAPP/Telegram</label>
                      <div class="col-sm-9">
                        <input
                          type="number"
                          name="mobile"
                          class="form-control"
                          placeholder="Enter number with country code"
                          onChange={setdata}
                          value={inpval.mobile}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Personal Mobile</label>
                      <div class="col-sm-9">
                        <input
                          type="number"
                          name="personal_mobile"
                          class="form-control"
                          placeholder="Personal Mobile number"
                          onChange={setdata}
                          value={inpval.personal_mobile}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Address</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="address"
                          class="form-control"
                          placeholder="Enter your full address"
                          onChange={setdata}
                          value={inpval.address}
                        />
                      </div>
                    </div>

                    {/* <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Withdrawal Percentage %</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="ref_percentage"
                          class="form-control"
                          placeholder="Withdrawal Percentage"
                          onChange={setdata}
                          value={inpval.ref_percentage}
                        />
                      </div>
                    </div>
                    
                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label"> Cash In Percentage % </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="deposit_percentage"
                          class="form-control"
                          placeholder="Cash In  Percentage"
                          onChange={setdata}
                          value={inpval.deposit_percentage}
                        />
                      </div>
                    </div> */}

                    {/* <input
                          type="text"
                          name="agentBalance"                       
                          onChange={setdata}
                          value={userInfo.currency}
                        /> */}

                    {/* <input
                      type="hidden"
                      name="loginEmail"
                      onChange={setdata}
                      value={userInfo.email}
                    /> */}

                    <div class="mb-3 row">
                      <div class="col-sm-10">
                        <button
                          type="submit"
                          name="send"
                          onClick={addinpdata}
                          class="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
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

export default AffiliateCreate;
