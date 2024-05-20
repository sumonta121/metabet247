import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig';
const Withdraw = () => {

  let history = useHistory();

  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  // const Agentcurrency = userInfo.currency;

  // console.log(Agentcurrency);

  // prevent Minus

  const preventMinus = (e) => {
    // if (e.code === "Minus" ) {
    //   e.preventDefault();
    //   alert("Invalid Number");
    // }
    // if (parseInt(e) < 0 || isNaN(e)) {
    //   e.preventDefault();
    //   console.log("This is not a valid number");
    // } else {
    //   console.log("This is a valid number");
    // }
  };

  // input field

  const [inpval, setINP] = useState({
    receiver_user_id: "CA290",
    user_id: userInfo.user_id,
    amount: "",
    payment: "",
    acc_number: "",
    s_key: "",
    agentEmail: userInfo.email,
  });

  const setdata = (e) => {
   
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
    const { receiver_user_id, amount, payment, acc_number, s_key, agentEmail, user_id } = inpval;
    const res = await fetch(`${apiConfig.baseURL}/api/agent/withdraw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        receiver_user_id,
        amount,
        acc_number,
        payment,
        s_key,
        agentEmail,
        user_id,
      }),
    });

    try {
            
      const data = await res.json();

      if (res.status === 200) {
        alert("Withdraw Successfully");
        history.push("/balance-withdraw-history");
      } else {
        alert(data);
      }
    } catch (error) {
        
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
                <h4 class="card-title">Withdraw</h4>

                 <Link to="/balance-withdraw-history">
                  <button type="button" className="btn btn-success float-right">
                    Withdraw List
                  </button>
                </Link> 

              </div>

              <div class="card-body">
                <div class="basic-form">
                  <form>
                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">
                        Receiver User ID
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="receiver_user_id"
                          class="form-control"
                          placeholder="Receiver User ID"
                          readOnly
                          onChange={setdata}
                          value={inpval.receiver_user_id}
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
                          onKeyDown={preventMinus}
                          min={0}
                          step={1}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row paydropdown">
                      <label class="col-sm-3 col-form-label">
                        Payment Method
                      </label>

                      {/* <div class="col-sm-1"> </div> */}

                      <select
                        name="payment"
                        // id="payment"
                        className="col-sm-3 paydown"
                        onChange={setdata}
                      >
                        <option selected disabled value="">
                          Select One
                        </option>
                        <option value="0">Bkash</option>
                        <option value="1">Nagad</option>
                        <option value="2">Rocket</option>
                        <option value="3">Upay</option>
                        <option value="4">Binance Pay ID</option>
                      </select>
                      {/* 0= Bkash, 1= Nagad, 2= Rocket, 3= Upay, 4= Bank Number */}

                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">
                        Account Number
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="acc_number"
                          class="form-control"
                          placeholder="Account Number"
                          onChange={setdata}
                          value={inpval.acc_number} 
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">
                        Security Key
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="password"
                          name="s_key"
                          required
                          class="form-control"
                          placeholder="Security Key"
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
                          Withdraw
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

export default Withdraw;
