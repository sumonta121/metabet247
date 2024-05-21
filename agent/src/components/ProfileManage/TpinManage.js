import React, { useState, useEffect } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import axios from "axios";
import apiConfig from '../apiConfig';


const TpinManage = () => {
  const history = useHistory();

  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;

  // State for input values
  const [inpval, setINP] = useState({
    tpin: "",
    email: userInfo.email,
    user_id: userInfo.user_id,
  });

  useEffect(() => {
    // Fetch user T-pin data when the component mounts
    const fetchTpinData = async () => {
      try {
        const response = await axios.get(`${apiConfig.baseURL}/api/users/${userInfo.user_id}`);
        const userData = response.data;

        // Set initial T-pin value
        setINP((preval) => ({
          ...preval,
          tpin: userData.tpin || "", // Assuming T-pin field is present in userData
        }));
      } catch (error) {
        console.error("Error fetching T-pin data:", error);
      }
    };

    fetchTpinData();
  }, [userInfo.user_id]);

  // Function to handle input changes
  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  // Function to handle T-pin update
  const addinpdata = async (e) => {
    e.preventDefault();

    const { tpin, email, user_id } = inpval;

    if (tpin.length === 0) {
      alert("Fill up T-pin");
      return;
    }

    try {
      const res = await axios.post(`${apiConfig.baseURL}/api/users/TpinManage/${user_id}`, {
        tpin,
        email,
        user_id,
      });

      if (res.status === 200) {
        alert("Update Successfully");
        history.push("/agent");
      } else {
        console.log(res.status);
      }
    } catch (error) {
      console.error("Error updating T-pin:", error);
      alert("Internal Server Error");
    }
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
                <h4 className="card-title">Security T-pin Manage</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form>
                    <fieldset>
                      <legend> Reset</legend>

                      <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">
                          Change Security Key/T-pin
                        </label>
                        <div className="col-sm-9">
                          <input
                            type="text"
                            name="tpin"
                            className="form-control"
                            placeholder="Change Security Key"
                            onChange={setdata}
                            value={inpval.tpin}
                          />
                        </div>
                      </div>
                    </fieldset>

                    <input
                      type="hidden"
                      name="user_id"
                      onChange={setdata}
                      value={userInfo.user_id}
                    />

                    <input
                      type="hidden"
                      name="agentEmail"
                      onChange={setdata}
                      value={userInfo.email}
                    />

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
        </div>
    </>
  );
};

export default TpinManage;
