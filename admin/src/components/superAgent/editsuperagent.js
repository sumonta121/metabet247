import React, { useState, useEffect } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig';

const AgentEdit = ({ match }) => {
  const Id = match.params._id;
  let history = useHistory();
  
  // Token and user info
  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const userInfo = decodedToken;

  const [inpval, setINP] = useState({
    handle: "",
    email: "",
    //password: "",
    mobile: "",
    ref_percentage: "",
    deposit_percentage: "",
    account_status: "",
  });

  // Fetch the agent's data on component mount
  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const res = await fetch(`${apiConfig.baseURL}/api/agent/getUserById/${Id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 200) {
          const data = await res.json();
          setINP(data);  // Populate the form with fetched data
        } else {
          console.error(`Failed to fetch agent data: ${res.status}`);
        }
      } catch (error) {
        console.error("Error fetching agent data:", error);
      }
    };

    fetchAgentData();
  }, [Id]);

  // Handle input change
  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  // Handle form submission
  const addinpdata = async (e) => {
    e.preventDefault();
    const { handle, email, mobile,  account_status, ref_percentage, deposit_percentage } = inpval;
    
    try {
      const res = await fetch(`${apiConfig.baseURL}/api/agent/updateAgent/${Id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          handle,
          email,
       //   password,
          account_status,
          mobile,
          ref_percentage,
          deposit_percentage,
        }),
      });

      const data = await res.json();
      
      if (res.status === 200) {
        alert("Updated Successfully");
        history.push("/super-agent");
      } else {
        alert(`Error: ${data.message || "Something went wrong!"}`);
      }
    } catch (error) {
      console.error("Error updating agent data:", error);
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
                <h4 className="card-title">Super Agent Update </h4>
              </div>

              <div className="card-body">
                <div className="basic-form">
                  <form>
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label"> Name</label>
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
                      <label className="col-sm-3 col-form-label"> Email</label>
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
{/* 
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Password</label>
                      <div className="col-sm-9">
                        <input
                          type="hidden"
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
                    
                    <input
                          type="hidden"
                          name="ref_percentage"
                          className="form-control"
                          placeholder="Reference Percentage"
                          onChange={setdata}
                          value="0"
                        />
                    
                    <input
                          type="hidden"
                          name="deposit_percentage"
                          className="form-control"
                          placeholder="Deposit Percentage"
                          onChange={setdata}
                            value="0"
                        />

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

                    <div className="mb-3 row">
                      <div className="col-sm-10">
                        <button
                          type="submit"
                          name="send"
                          onClick={addinpdata}
                          className="btn btn-primary"
                        >
                          Update
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

export default AgentEdit;
