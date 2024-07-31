import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig';

const AffiliateEdit = ({ match }) => {
  const Id = match.params._id;
  let history = useHistory();

  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;

  // set data
  const [inpval, setINP] = useState({
    user_id: "",
    wallet_method: "",
    wallet_type: "",
    agent_wallet: "",
    status: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state for data fetching
  const [isUpdating, setIsUpdating] = useState(false); // Loading state for updating data

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${apiConfig.baseURL}/api/agent/agent_wallet_edit/${Id}`);
        const data = res.data;
        setINP(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [Id]);

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    const { user_id, wallet_method, agent_wallet, wallet_type, status } = inpval;
    try {
      const res = await fetch(`${apiConfig.baseURL}/api/agent/agent_wallet_update/${Id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
          wallet_method,
          agent_wallet,
          wallet_type,
          status,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        alert("Update Successfully");
        history.push("/add-wallet-list");
      } else {
        console.log(res.status);
      }
      if (res.status === 400) {
        alert("A user has already registered with this agent_wallet");
      }
      if (res.status === 401) {
        alert("Fill up all fields & Password between 6-30 chars");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
    setIsUpdating(false);
  };

  return (
    <>
      <div id="main-wrapper">
        <Navbar />
        <Chatbox />
        <HeaderRight />
        <LeftSidebar />
        <div className="content-body">
          <div className="container-fluid">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Agent Edit: USER ID ( {inpval.user_id} )</h4>
                </div>
                <div className="card-body">
                  <div className="basic-form">
                    {isLoading ? (
                      <div>Loading...</div>
                    ) : (
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
                          />
                        </div>
                      </div>


                      <div class="mb-3 row">
                        <label class="col-sm-3 col-form-label">Select Status</label>
                        <div class="col-sm-9">
                          <select name="status" id="status" value={inpval.status} onChange={setdata} class="form-control" required>
                              <option value="">Select Status</option>
                              <option value="active">Active</option>
                              <option value="inactive">Inactive</option>
                          </select>
                        </div>
                      </div>


                      <div className="mb-3 row">
                        <div className="col-sm-10">
                          <button
                            type="submit"
                            name="send"
                            onClick={addinpdata}
                            className="btn btn-primary"
                            disabled={isUpdating}
                          >
                            {isUpdating ? "Updating..." : "Update"}
                          </button>
                        </div>
                      </div>


                     </form>
                    )}
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

export default AffiliateEdit;
