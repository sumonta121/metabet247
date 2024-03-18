import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig'; 


const SendMoneyLimit = () => {
  let history = useHistory();
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  // const Agentcurrency = userInfo.currency;

  // sendmoney_min_limit, sendmoney_max_limit, send_money_charge, wallet_exchange_charge, user_bonus, signup_bonus


  const [inpval, setINP] = useState({
    sendmoney_min_limit: "",
    sendmoney_max_limit: "",
    send_money_charge: "",
    wallet_exchange_charge: "",
    user_bonus: "",
    signup_bonus: "",
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
    const { sendmoney_min_limit, sendmoney_max_limit, send_money_charge, wallet_exchange_charge, user_bonus, signup_bonus } = inpval;


    if (sendmoney_min_limit.length === 0) {
      alert("Fillup Min Amount ");
      return;
    }

    if (sendmoney_max_limit.length === 0) {
      alert("Input Max Amount");
      return;
    }

    if (send_money_charge.length === 0) {
      alert("Input Send Money Charge");
      return;
    }

    if (wallet_exchange_charge.length === 0) {
      alert("Input Exchange Charge");
      return;
    }

    if (user_bonus.length === 0) {
      alert("Fillup user bonus ");
      return;
    }

    if (signup_bonus.length === 0) {
      alert("Fillup signup bonus ");
      return;
    }

    const res = await fetch(`${apiConfig.baseURL}/api/users/SendMoneyLimit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sendmoney_min_limit, sendmoney_max_limit, send_money_charge, wallet_exchange_charge, user_bonus, signup_bonus
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Created Successfully");
      history.push("/send-money-limit-list");
    } else {
      console.log(res.status);
    }

    if (res.status === 401) {
      alert("Fillup All Field");
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
          <div class=" col-lg-8 offset-lg-2">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Send Money Limit Setting</h4>

                {/* <Link to="/promo-code-list">
                  <button type="button" className="btn btn-success float-right">
                    SendMoneyLimit List
                  </button>
                </Link> */}

              </div>

              {/*  campaign, amount, expire_date, limit */}

              <div class="card-body">
                <div class="basic-form">
                  <form>

                  <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Send Mony Limit: USD
                      </label>
                      <div className="col-sm-4">
                        <span> &nbsp; Minimum Limit USD</span>
                        <input
                          type="number"
                          placeholder="Minimum Limit "
                          className="form-control"
                          name="sendmoney_min_limit"
                          onChange={setdata}
                          value={inpval.sendmoney_min_limit}
                        />
                      </div>

                      <div className="col-sm-4">
                        <span> &nbsp; Maximum Limit USD</span>
                        <input
                          type="number"
                          placeholder="Maximum limit"
                          className="form-control"
                          name="sendmoney_max_limit"
                          onChange={setdata}
                          value={inpval.sendmoney_max_limit}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Send Money Charge
                      </label>
                      <div className="col-sm-6">
                        <span> &nbsp; Count By % </span>
                        <input
                          type="number"
                          placeholder="Send money charge"
                          className="form-control"
                          name="send_money_charge"
                          onChange={setdata}
                          value={inpval.send_money_charge}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Wallet Exchange Charge
                      </label>
                      <div className="col-sm-6">
                        <span> &nbsp; Count By % </span>
                        <input
                          type="number"
                          placeholder="wallet exchange charge"
                          className="form-control"
                          name="wallet_exchange_charge"
                          onChange={setdata}
                          value={inpval.wallet_exchange_charge}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Bonous: USD
                      </label>
                      <div className="col-sm-4">
                        <span> &nbsp; User Bonus USD</span>
                        <input
                          type="number"
                          placeholder="User Bonus"
                          className="form-control"
                          name="user_bonus"
                          onChange={setdata}
                          value={inpval.user_bonus}
                        />
                      </div>

                      <div className="col-sm-4">
                        <span> &nbsp; Signup Bonus USD</span>
                        <input
                          type="number"
                          placeholder="Signup Bonus"
                          className="form-control"
                          name="signup_bonus"
                          onChange={setdata}
                          value={inpval.signup_bonus}
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
                      name="agentEmail"
                      onChange={setdata}
                      value={userInfo.user_id}
                    />

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

export default SendMoneyLimit;
