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
  
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;
  // console.log(Agentcurrency);

  // prevent Minus

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
      alert("Invalid Number");
    }
  };

  // input field

  const [inpval, setINP] = useState({
    // email: "",
    user_id: "",
    amount: "",
    s_key: "",
    agentEmail: userInfo.email,
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
    const { user_id, amount, s_key, agentEmail } = inpval;
    const res = await fetch(`${apiConfig.baseURL}/api/agent/agent_transfer_update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        amount,
        s_key,
        agentEmail,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Transfer Successfully");
      // const history = useHistory();
      //   history.push("/agent-bal-tr");
    } else {
      if (data.email) {
        // alert(data.email);
      }

      if (data.amount) {
        // alert(data.amount);
      }
      if (data.s_key) {
        // alert(data.s_key);
      }
      console.log(res.status);
    }

    if (res.status === 404) {
      alert("This User does not exist");
      // console.log("Data Inserted successfully");
    }
    if (res.status === 422) {
      alert("Not Available Money");
      // console.log("Data Inserted successfully");
    }

    if (res.status === 400) {
      alert("Incorrect Security T-PIN");
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
                <h4 class="card-title"> Balance Transfer</h4>

                <Link to="/agent-balance-report">
                  <button type="button" className="btn btn-success float-right">
                     Report
                  </button>
                </Link>
              </div>
              <div class="card-body">
                <div class="basic-form">
                  <form>
                    {/* <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">User Email</label>
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
                    </div> */}

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">User Id</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="user_id"
                          class="form-control"
                          placeholder="User Id"
                          onChange={setdata}
                          value={inpval.user_id}
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
                          // onKeyDown={preventMinus}
                          min={0}
                          step={1}

                          // keydown={(event) => {
                          //   if (event.charCode < 48) {
                          //     event.preventDefault();
                          //   }
                          // }}
                        />
                      </div>
                    </div>

                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">
                        Security Key
                      </label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="s_key"
                          required
                          class="form-control"
                          placeholder="Security Key"
                          onChange={setdata}
                          value={inpval.s_key}
                        />
                      </div>
                    </div>

                    {/* <input
                          type="text"
                          name="agentBalance"                       
                          onChange={setdata}
                          value={userInfo.currency}
                        /> */}

                    <input
                      type="hidden"
                      name="agentEmail"
                      onChange={setdata}
                      value={userInfo.email}
                    />

                    <div class="mb-3 row">
                      <div class="col-sm-10">
                        <button
                          type="submit"
                          name="send"
                          onClick={addinpdata}
                          class="btn btn-primary"
                        >
                          Send
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
