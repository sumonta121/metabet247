import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";

const AffiliateLink = () => {
  
  let history = useHistory();
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  // const Agentcurrency = userInfo.currency;


  const [inpval, setINP] = useState({
    website: "",
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
    const { website, user_id } = inpval;

    if (website.length == 0) {
      alert("Add Website Address");
      return;
    }


    const res = await fetch("/api/users/AffiliateLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        website,
        user_id
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 200) {
      alert("Created Successfully");
      history.push("/affiliate-link-show");
    } else {
      console.log(res.status);
    }

    if (res.status === 401) {
      alert("Fillup All Field");
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
          <div class=" col-lg-8 offset-lg-2">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Affiliate Link</h4>

                <Link to="/affiliate-link-list">
                  <button type="button" className="btn btn-success float-right">
                      Affiliate Link List
                  </button>
                </Link>

              </div>

              {/*  campaign, amount, expire_date, limit */}

              <div class="card-body">
                <div class="basic-form">
                  <form>
                    <div class="mb-3 row">
                      <label class="col-sm-3 col-form-label">Website</label>
                      <div class="col-sm-9">
                        <input
                          type="text"
                          name="website"
                          class="form-control"
                          placeholder="Website Address"
                          onChange={setdata}
                          value={inpval.website}
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
                      name="user_id"
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
                          Generate Affiliate Link
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

export default AffiliateLink;
