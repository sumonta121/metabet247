import React, { useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import axios from "axios";
import apiConfig from '../apiConfig';


const PasswordManage = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;

  const [inpval, setINP] = useState({
    password: "",
    email: userInfo.email,
    user_id: userInfo.user_id,
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { password, email, user_id } = inpval;

    if (password.length < 6 || password.length > 30) {
      alert("Password should be between 6 and 30 characters");
      return;
    }

    try {
      const res = await axios.post(`${apiConfig.baseURL}/api/users/PasswordManage/${user_id}`, {
        password,
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
      if (error.response && error.response.status === 400) {
        alert("Fillup Field & between 6 and 30 chars");
      } else {
        console.error(error);
        alert("Internal Server Error");
      }
    }
  };

  return (
    <>
     <div id="main-wrapper">
      <Navbar />
      <Chatbox />
      <HeaderRight />
      <LeftSidebar />

      <div class="content-body">
        <div class="container-fluid">
          <div class=" col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Password Manage</h4>
              </div>
              <div class="card-body">
                <div class="basic-form">
                  <form>
                    <fieldset>
                      <legend> Reset</legend>

                      <div class="mb-3 row">
                        <label class="col-sm-3 col-form-label">
                          Change Password
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            placeholder="Change Password"
                            onChange={setdata}
                            value={inpval.password}
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

                    <div class="mb-3 row">
                      <div class="col-sm-10">
                        <button
                          type="submit"
                          name="send"
                          onClick={addinpdata}
                          class="btn btn-primary"
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

export default PasswordManage;
