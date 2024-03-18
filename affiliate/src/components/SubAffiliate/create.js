import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
// import  { useHistory  } from 'react-router-dom'


const SubAffiliateCreate = () => {

  let history = useHistory();

  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  // const adminCurrency = userInfo.currency;

  const [inpval, setINP] = useState({
    handle: "",
    email: "",
    password: "",
    mobile: "",
    ref_percentage: "",
    deposit_percentage: "",
    
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
    const { handle, email, password, mobile, ref_percentage, deposit_percentage } = inpval;
    const res = await fetch("/api/agent/SubAffiliateCreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handle,
        email,
        password,
        mobile,
        ref_percentage, 
        deposit_percentage
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Created Successfully");
      history.push("/subaffiliate-index");
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
      <Navbar />

      <Chatbox />

      <HeaderRight />

      <LeftSidebar />

      <div class="content-body">
        <div class="container-fluid">
          <div class=" col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Sub Affiliate Create</h4>

                <Link to="/subaffiliate-index">
                  <button type="button" className="btn btn-success float-right">
                  Affiliate List{" "}
                  </button>
                </Link>
              </div>
              <div class="card-body">
                <div class="basic-form">
                  <form>
                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Sub Affiliate Name</label>
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
                      <label class="col-sm-3 col-form-label">Sub Affiliate Email</label>
                      <div class="col-sm-9">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Email"
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
                      <label class="col-sm-3 col-form-label">Mobile</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="mobile"
                          class="form-control"
                          placeholder="Mobile number"
                          onChange={setdata}
                          value={inpval.mobile}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Reference Percentage %</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="ref_percentage"
                          class="form-control"
                          placeholder="Referance Percentage"
                          onChange={setdata}
                          value={inpval.ref_percentage}
                        />
                      </div>
                    </div>
                    
                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label"> Deposit Percentage % </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="deposit_percentage"
                          class="form-control"
                          placeholder="Deposit Percentage"
                          onChange={setdata}
                          value={inpval.deposit_percentage}
                        />
                      </div>
                    </div>

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
    </>
  );
};

export default SubAffiliateCreate;
