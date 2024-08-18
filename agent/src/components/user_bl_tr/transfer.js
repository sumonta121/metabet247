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
    agent_id: userInfo.user_id,
    user_id: "",
    amount: "",
    s_key: "",
    agentEmail: userInfo.email,
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const balanceTransfer = (() => {
    if (user_role === 2) {
      return (
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Super Agent ID</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="user_id"
              className="form-control"
              placeholder="Super Agent Id"
              onChange={setdata}
              value={inpval.user_id}
            />
          </div>
        </div>
      );
    } else if (user_role === 2.1) {
      return (
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Agent ID</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="user_id"
              className="form-control"
              placeholder="Agent ID"
              onChange={setdata}
              value={inpval.user_id}
            />
          </div>
        </div>
      );
    } else if (user_role === 4) {
      return (
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">User Id</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="user_id"
              className="form-control"
              placeholder="User Id"
              onChange={setdata}
              value={inpval.user_id}
            />
          </div>
        </div>
      );
    }
  })();

  const addinpdata = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    const { user_id, amount, s_key, agent_id, agentEmail } = inpval;
    const res = await fetch(`${apiConfig.baseURL}/api/agent/balance_send_to_superagent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        amount,
        s_key,
        agent_id,
        agentEmail,
      }),
    });

    const data = await res.json();
    console.log(data);
    setIsLoading(false);
    if (res.status === 200) {
      alert("Transfer Successfully");
      history.push("/user-balance-report");
    } 

    if (res.status === 404) {
      alert("This User does not exist");
    }
    if (res.status === 422) {
      alert(data);
    }
    if (res.status === 400) {
      alert("Incorrect Security T-PIN");
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
              <h4 class="card-title">Balance Transfer</h4>

              <Link to="/user-balance-report">
                <button type="button" className="btn btn-success float-right">
                 Report
                </button>
              </Link>
            </div>
            <div class="card-body">
              <div class="basic-form">
                <form>
                 

                  { balanceTransfer }
                  <div class="mb-3 row">
                    <label class="col-sm-3 col-form-label">Amount</label>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        name="amount"
                        class="form-control"
                        placeholder="Amount"
                        onChange={setdata}
                        value={inpval.amount}
                        onKeyDown={preventMinus}
                        min={0}
                        step={1}
                       
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label class="col-sm-3 col-form-label">
                      Security Pin
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="password"
                        name="s_key"
                        required
                        class="form-control"
                        placeholder="Security Pin"
                        onChange={setdata}
                        value={inpval.s_key}
                      />
                    </div>
                  </div>

             

                  <input
                    type="hidden"
                    name="agentEmail"
                    onChange={setdata}
                    value={userInfo.email}
                  />

                  <input
                    type="hidden"
                    name="agent_id"
                    onChange={setdata}
                    value={userInfo.user_id}
                  />

                  <div class="mb-3 row" align="right">
                    <div class="col-sm-12">
                      <button
                          type="submit"
                          name="send"
                          onClick={addinpdata}
                          className="btn btn-primary"
                          disabled={isLoading}
                        >
                          {isLoading ? "Processing..." : "Transfer"}
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

export default Transfer;
