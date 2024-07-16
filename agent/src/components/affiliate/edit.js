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
    handle: "",
    email: "",
    password: "",
    mobile: "",
    personal_mobile: "",
    address: "",
    ref_percentage: "0",
    deposit_percentage: "0",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state for data fetching
  const [isUpdating, setIsUpdating] = useState(false); // Loading state for updating data

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${apiConfig.baseURL}/api/agent/getaffiliate/${Id}`);
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
    const { handle, email, password, address, personal_mobile, mobile, ref_percentage, deposit_percentage } = inpval;
    try {
      const res = await fetch(`${apiConfig.baseURL}/api/agent/updateaffiliate/${Id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          handle,
          email,
          password,
          address,
          personal_mobile,
          mobile,
          ref_percentage,
          deposit_percentage,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        alert("Update Successfully");
        history.push("/affiliate-index");
      } else {
        console.log(res.status);
      }
      if (res.status === 400) {
        alert("A user has already registered with this address");
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
                        <div className="mb-3 row">
                          <label className="col-sm-3 col-form-label">Agent Name</label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              name="handle"
                              className="form-control"
                              placeholder="Name"
                              onChange={setdata}
                              value={inpval.handle}
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="col-sm-3 col-form-label">Password</label>
                          <div className="col-sm-9">
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              onChange={setdata}
                              value="{inpval.password}"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="col-sm-3 col-form-label">WTSAPP/Telegram</label>
                          <div className="col-sm-9">
                            <input
                              type="number"
                              name="mobile"
                              className="form-control"
                              placeholder="Enter number with country code"
                              onChange={setdata}
                              value={inpval.mobile}
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="col-sm-3 col-form-label">Personal Mobile</label>
                          <div className="col-sm-9">
                            <input
                              type="number"
                              name="personal_mobile"
                              className="form-control"
                              placeholder="Personal Mobile number"
                              onChange={setdata}
                              value={inpval.personal_mobile}
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="col-sm-3 col-form-label">Address</label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              name="address"
                              className="form-control"
                              placeholder="Enter your full address"
                              onChange={setdata}
                              value={inpval.address}
                            />
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
