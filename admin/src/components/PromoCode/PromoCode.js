import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig'; 

const PromoCode = () => {
  
  let history = useHistory();
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  // const Agentcurrency = userInfo.currency;

  // input field : , campaign: first sign-up, Referral, Percentage, Fixed amount, Special Day, Offer | currency, promo_code, campaign, amount, expire_date, limit

  const [inpval, setINP] = useState({
    // promo_code: "",
    campaign: "",
    amount: "",
    expire_date: "",
    limit: "",
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
    const { campaign, amount, expire_date, limit } = inpval;

    if (campaign.length == 0) {
      alert("Select Campaign");
      return;
    }

    if (expire_date.length == 0) {
      alert("Fillup Date");
      return;
    }

    if (amount.length == 0) {
      alert("Fillup Amount");
      return;
    }

    if (limit.length == 0) {
      alert("Fillup Limit");
      return;
    }

    const res = await fetch(`${apiConfig.baseURL}/api/users/PromoCode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        campaign,
        amount,
        expire_date,
        limit,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Created Successfully");
      history.push("/admin-promocode-show");
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
                <h4 class="card-title">Promo Code</h4>

                <Link to="/promo-code-list">

                  <button type="button" className="btn btn-success float-right">
                         PromoCode List
                  </button>

                </Link>

              </div>

              {/*  campaign, amount, expire_date, limit */}

              <div class="card-body">
                <div class="basic-form">
                  <form>
                    <div className="mb-3 row paydropdown">
                      <label class="col-sm-3 col-form-label">
                        Campaign Method
                      </label>

                      <select
                        name="campaign"
                        className="col-sm-3 paydown"
                        onChange={setdata}
                      >
                        {/*  Campaign: first_signup, Referral, Percentage, Fixed_amount, Special_Day, Offer  */}
                        <option selected disabled value="">
                          Select One
                        </option>
                        <option value="first_signup">First Signup</option>
                        <option value="referral">Referral</option>
                        {/* <option value="percentage">Percentage</option> */}
                        <option value="fixed_amount">Fixed amount</option>
                        <option value="special_day">Special Day</option>
                        <option value="offer">Offer</option>
                      </select>
                      {/* 0= Bkash, 1= Nagad, 2= Rocket, 3= Upay, 4= Bank Number */}
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Expire Date</label>
                      <div class="col-sm-4">
                        <input
                          type="date"
                          name="expire_date"
                          class="form-control"
                          placeholder="expire_date"
                          onChange={setdata}
                          value={inpval.expire_date}
                        />
                      </div>
                    </div>

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
                          //   onKeyDown={preventMinus}
                          //   min={0}
                          //   step={1}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Limit</label>
                      <div class="col-sm-9">
                        <input
                          type="number"
                          name="limit"
                          class="form-control"
                          placeholder="Limit Number"
                          onChange={setdata}
                          value={inpval.limit}
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
                          Generate Code
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

export default PromoCode;
