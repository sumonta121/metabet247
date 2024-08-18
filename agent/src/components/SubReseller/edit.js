import React, { useEffect, useState, useRef } from "react";
import {Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig';

const SubResellerEdit = () => {

  const { usAutoId } = useParams(); 
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [inpval, setINP] = useState({
    handle: "",
    email: "",
    account_status: "",
    mobile: "",
    ref_percentage: "",
    deposit_percentage: "",
  });

  // Fetch existing user data
  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${apiConfig.baseURL}/api/agent/editagent/${usAutoId}`);
        setUser(response.data);
        setINP({
          handle: response.data.handle,
          email: response.data.email,
          mobile: response.data.mobile,
          ref_percentage: response.data.ref_percentage,
          deposit_percentage: response.data.deposit_percentage,
          account_status: response.data.account_status,
          id: response.data._id,
        
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [usAutoId]);

  // Handle form input changes
  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((prevVal) => ({ ...prevVal, [name]: value }));
  };

  // Handle form submission
  const addinpdata = async (e) => {
    e.preventDefault();


    
    try {
      const res = await fetch(`${apiConfig.baseURL}/api/agent/updateagent/${usAutoId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inpval),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("Update Successfully");
        history.push("/subreseller-index");
      } else {
        console.error("Update error:", data);
      }

      if (res.status === 400) {
        alert("A user has already registered with this email address.");
      } else if (res.status === 401) {
        alert("Ensure the email is formatted correctly & the password is between 6-30 characters.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Chatbox />
      <HeaderRight />
      <LeftSidebar />

      <div className="content-body">
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edit | Id: {usAutoId}</h4>
              </div>
              <div className="card-body">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="basic-form">
                    <form onSubmit={addinpdata}>
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
                        <label className="col-sm-3 col-form-label">Agent Email</label>
                        <div className="col-sm-9">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={setdata}
                            value={inpval.email}
                          />
                        </div>
                      </div>
                      {/* <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-9">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={setdata}
                            value={inpval.password}
                          />
                        </div>
                      </div> */}
                      <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">Mobile</label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="mobile"
                            className="form-control"
                            placeholder="Mobile number"
                            onChange={setdata}
                            value={inpval.mobile}
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">Status</label>
                        <div className="col-sm-9">
                          <select value={inpval.account_status} className="form-control" onChange={setdata} id="account_status" name="account_status">
                            <option value="">Select Status</option>
                            <option value="1" >Active</option>
                            <option value="2" >Inactive</option>
                          </select>
                        </div>
                      </div>
                        <input
                          type="hidden"
                          name="ref_percentage"
                          className="form-control"
                          placeholder="Reference Percentage"
                          onChange={setdata}
                          value={inpval.ref_percentage}
                        />
                          <input
                          type="hidden"
                          name="deposit_percentage"
                          className="form-control"
                          placeholder="Deposit Percentage"
                          onChange={setdata}
                          value={inpval.deposit_percentage}
                        />
                      <div className="mb-3 row" align="right">
                        <div className="col-sm-12">
                          <button type="submit" className="btn btn-primary">
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SubResellerEdit;
