import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBalance = () => {
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
  };

  const history = useHistory(); 
 
  const [inpval, setINP] = useState({
    user_id: "",
    voucher_id: "",
    s_key: "",
    agent_userid: userInfo.user_id,
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

    try {
        const { user_id, voucher_id, s_key, agent_userid } = inpval;
        const response = await axios.post(`api/withdraw/cashin`, {user_id,voucher_id,s_key,agent_userid});

        toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        });
        
        history.push('/cashin-history');
    } catch (error) {     
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        } else {
          toast.error('Failed to validate. Please try again.', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      }

  };

  return (
    <>
      <ToastContainer style={{ zIndex: 999999999 }}  />
      <Navbar />

      <Chatbox />

      <HeaderRight />

      <LeftSidebar />

      <div class="content-body" style={{ marginTop:'0px', paddingTop:'0px' }}>
        <div class="container-fluid">
          <div class=" col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Add Balance</h4>
                <Link to="/add-balance-history" className="btn btn-success float-right">Add Balance History </Link>
              </div>
              <div class="card-body">
                <div class="basic-form">
                  <form>
                  
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
                      <label class="col-sm-3 col-form-label">Transaction Id</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="transaction_id"
                          class="form-control"
                          placeholder="Enter Transaction Id"
                          onChange={setdata}
                          value={inpval.transaction_id}                       
                        />
                      </div>
                    </div>
                    
                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Amount</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="amount"
                          class="form-control"
                          placeholder="Enter Amount"
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
                
                    <input
                      type="hidden"
                      name="agent_userid"
                      onChange={setdata}
                      value={userInfo.email}
                    />

                    <div align="right" class=" mt-4 mb-4">
                              <button
                          type="submit"
                          name="send"
                          onClick={addinpdata}
                          class="btn btn-primary"
                        >
                         Send Request
                        </button>
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

export default AddBalance;
