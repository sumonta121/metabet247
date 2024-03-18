import React, { Component, useState } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import axios from "axios";

const NoticeManage = () => {
  const history = useHistory();
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;

  const [newUser, setNewUser, setNewAuthor = setNewUser] = useState({
    title: "",
    description: "",
    notice_img: "",
  });

  // title, description, notice_img

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("notice_img", newUser.notice_img);
    formData.append("title", newUser.title);
    formData.append("description", newUser.description);

    if (newUser.notice_img.length == 0) {
      alert("Please Upload Image ");
      return;
    }

    if (newUser.title.length == 0) {
      alert("Fillup title ");
      return;
    }

    if (newUser.description.length == 0) {
      alert("Fillup  Description ");
      return;
    }

    axios
      .post("/api/users/NoticeManage/", formData)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          alert("Added Successfully");
          history.push("/admin");
        } else {
          console.log(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlenotice_img = (e) => {
    setNewAuthor({ ...newUser, notice_img: e.target.files[0] });
  };

  //   if (name.length == 0) {
  //     alert("Name Fillup ");
  //     return;
  //   }

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
                <h4 className="card-title">Notice Manage</h4>

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
                        Notice  Image
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          name="notice_img"
                          className="form-control"
                          onChange={handlenotice_img}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                      Notice Title
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          placeholder="Notice Title"
                          className="form-control"
                          name="title"
                          value={newUser.title}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                      Notice Description
                      </label>
                      <div className="col-sm-9">

                        <textarea
                          type="text"
                          placeholder="Notice Description"
                          className="form-control"
                          name="description"
                          value={newUser.description}
                          onChange={handleChange}

                        > 
                        </textarea>


                        {/* <input
                          type="title"
                          placeholder="Notice Title"
                          className="form-control"
                          name="title"
                          value={newUser.title}
                          onChange={handleChange}
                        /> */}

                      </div>
                    </div>

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

export default NoticeManage;
