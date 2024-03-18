import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
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


  const [inpval, setINP] = useState({
    tpin: "",
    email: userInfo.email,
    user_id: userInfo.user_id,
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

    const { tpin, email, user_id } = inpval;

    if ( tpin.length == 0 ) {
      alert(
        'Fillup Tpin',
      )
      return
    }

    // const res = await axios.delete(`/api/users/TpinManage/${user_id}`, {
    const res = await fetch(`${apiConfig.baseURL}/api/users/TpinManage/${user_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tpin,
        email,
        user_id,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Update Successfully");

      history.push("/admin");
    } else {
      console.log(res.status);
    }

    if (res.status === 400) {
      alert("Fillup Field & between 6 and 30 chars");
      // const history = useHistory();
      //   history.push("/agent-bal-tr");
    } else {
      console.log(res.status);
    }
  };

  // update button

  // const addinpdata = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.delete(
  //       `/api/users/TpinManage/${user_id}`
  //     );
  //     console.log(response.data); // Optional: Handle success message

  //     if (response.status === 200) {
  //       alert("Update  Successfully");
  //       // window.location.replace('/agent');
  //       // let history = useHistory();
  //       // history.push("/agent");
  //     }
  //   } catch (error) {
  //     console.error(error); // Optional: Handle error
  //   }
  // };

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
                <h4 class="card-title">Security T-pin Manage</h4>
              </div>
              <div class="card-body">
                <div class="basic-form">
                  <form>
                    <fieldset>
                      <legend> Reset</legend>

                      <div class="mb-3 row">
                        <label class="col-sm-3 col-form-label">
                          Change Security Key/T-pin
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            name="tpin"
                            class="form-control"
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

                        {/* <button
                          onClick={handlePaid}
                          className="btn btn-success"
                        >
                          Update
                        </button> */}
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

export default TpinManage;
