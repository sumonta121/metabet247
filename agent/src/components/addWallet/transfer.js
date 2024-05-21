import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig';


const Transfer = () => {
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_role = userInfo.role_as;

  const preventMinus = (e) => {
    // Handle Minus key press
  };

  const [inpval, setINP] = useState({
    user_id: userInfo.user_id,
    wallet_method: "",
    agent_wallet: "",
    wallet_type: ""

  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const history = useHistory();

  const addinpdata = async (e) => {
    e.preventDefault();
    const { user_id, wallet_method, wallet_type, agent_wallet } = inpval;
    const res = await fetch(`${apiConfig.baseURL}/api/agent/agent_wallet_create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        wallet_method,
        wallet_type,
        agent_wallet,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Created Successfully");
      history.push("/add-wallet-list");
    } else {
      if (data.email) {
        // alert(data.email);
      }
      if (data.agent_wallet) {
        // alert(data.agent_wallet);
      }
      if (data.wallet_type) {
        // alert(data.wallet_type);
      }
      console.log(res.status);
    }

    if (res.status === 404) {
      alert("This User does not exist");
    }
    if (res.status === 422) {
      alert("Not Available Money");
    }
    if (res.status === 400) {
      alert("Incorrect Security T-PIN");
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
              <h4 class="card-title">Wallet Create</h4>
              <Link to="/add-wallet-list">
                <button type="button" className="btn btn-success float-right">
                 Report{" "}
                </button>
              </Link>
            </div>
            <div class="card-body">
              <div class="basic-form">
                <form>
              
                  <div class="mb-3 row">
                    <label class="col-sm-3 col-form-label">Select Method</label>
                    <div class="col-sm-9">
                      <select name="wallet_method" id="wallet_method" value={inpval.wallet_method} onChange={setdata} class="form-control" required>
                          <option value="">Select Method</option>
                          <option value="bKash">bKash</option>
                          <option value="Nagad">Nagad</option>
                          <option value="Rocket">Rocket</option>
                      </select>
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label class="col-sm-3 col-form-label">Select Type</label>
                    <div class="col-sm-9">
                      <select name="wallet_type" id="wallet_type" value={inpval.wallet_type}   onChange={setdata} class="form-control" required>
                          <option value="">Select Method</option>
                          <option value="Personal">Personal</option>
                          <option value="Merchant">Merchant</option>
                          <option value="Agent">Agent</option>
                      </select>
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label class="col-sm-3 col-form-label">Agent wallet Number</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        name="agent_wallet"
                        class="form-control"
                        placeholder="agent wallet number"
                        onChange={setdata}
                        value={inpval.agent_wallet}
                        onKeyDown={preventMinus}
                        min={0}
                        step={1}
                     
                      />
                    </div>
                  </div>


                  <div class="mb-3 row" align="right">
                    <div class="col-sm-12">
                      <button
                        type="submit"
                        name="send"
                        onClick={addinpdata}
                        class="btn btn-primary"
                      >
                        Create
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

export default Transfer;
