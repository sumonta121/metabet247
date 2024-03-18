import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import axios from "axios";

const FaviconSetting = () => {
  const history = useHistory();
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;

  //  site_favicon, admin_login_cover

  const [newUser, setNewUser, setNewAuthor = setNewUser] = useState({
    site_favicon: "",
    // admin_login_cover: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("site_favicon", newUser.site_favicon);
    // formData.append("admin_login_cover", newUser.admin_login_cover);

    

    if (newUser.site_favicon.length === 0) {
      alert("Please Favicon Logo Upload");
      return;
    }

    // if (newUser.admin_login_cover.length === 0) {
    //   alert("Please Admin login cover Upload");
    //   return;
    // }


    axios
      .post("/api/users/FaviconSetting/", formData)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          alert("Added Successfully");
          history.push("/favicon-setting-list");
        } else {
          console.log(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleChange = (e) => {
  //   setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  // };


  const handlesite_favicon = (e) => {
    setNewAuthor({ ...newUser, site_favicon: e.target.files[0] });
  };

  return (
    <>
      <Navbar />

      <Chatbox />

      <HeaderRight />

      <LeftSidebar />

      <div className="content-body">
        <div className="container-fluid">
          <div className=" col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Favicon Setting</h4>

                {/* <Link to="/user-bal-list">
                  <button type="button" classNameName="btn btn-success float-right">
                    User List{" "}
                  </button>
                </Link> */}

              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">

                    

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Favicon Logo
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          name="site_favicon"
                          className="form-control"
                          onChange={handlesite_favicon}
                        />
                      </div>
                    </div>

                    {/* <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Admin Login Cover Banner
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          name="admin_login_cover"
                          className="form-control"
                          onChange={handleadmin_login_cover}
                        />
                      </div>
                    </div> */}

                    

                    <div className="mb-3 row">
                      <div className="col-sm-2">
                        <input
                          className="form-control btn btn-primary"
                          type="submit"
                        />
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

export default FaviconSetting;
