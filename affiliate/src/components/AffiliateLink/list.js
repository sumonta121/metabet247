// import React, { Component, useState, useEffect } from "react";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AffiliateLinkList = () => {
  let history = useHistory();
  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;

  const [getuserdata, setUserdata] = useState([]);

  const getdata = async () => {
    const res = await fetch("/api/users/AffiliateLinkList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setUserdata(sortedData);

      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // copy from text

  function ClipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ("clipboard" in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand("copy", true, text);
      }
    }

    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <div>
        <input className="copy-text" type="text" value={copyText} readOnly />{" "}
        &nbsp; &nbsp;
        {/* Bind our handler function to the onClick button property */}
        <button className="copybtn-text" onClick={handleCopyClick}>
          <span>{isCopied ? "Copied!" : <i className="fa fa-copy"> </i>}</span>
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Chatbox />

      <HeaderRight />

      <LeftSidebar />

      <div class="content-body">
        <div class="container-fluid">
          <div className="col-lg-12">
            <div className="card text-center">
              <h3 className="card text-center">
                {" "}
                Refer Link: &nbsp; &nbsp;
                <b>
                  {" "}
                  <ClipboardCopy
                    copyText={`https://metabet247.com/#/signup?ref=${userInfo.user_id}`}
                  />{" "}
                </b>
                {/* <i className="fa fa-copy"> </i> */}
              </h3>
            </div>

            <div className="card">
              <h3 className="text-center">
                For Custom Website: &nbsp; &nbsp;
                <Link to="/affiliate-link">
                  <button type="button" className="btn btn-success float-right">
                    Create Refer Link
                  </button>
                </Link>
              </h3>

              <div className="card-header">
                <h5 className="card-title">Custom Refer List</h5>
                {/* <Link to="/affiliate-link">
                  <button type="button" className="btn btn-success float-right">
                    Create Refer Link
                  </button>
                </Link> */}
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>SL</th>
                          <th>Affiliate Link</th>
                          <th>Copy Link</th>
                          {/* <th>Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {getuserdata.map((element, id) => {
                          // delete
                          const handleDelete = async () => {
                            try {
                              const response = await axios.delete(
                                `/api/agent/deleteAgent/${element._id}`
                              );
                              console.log(response.data); // Optional: Handle success message

                              if (response.status === 200) {
                                alert("Delete Successfully");
                                // window.location.replace('/agent-index');
                                history.push("/admin");
                              }
                            } catch (error) {
                              console.error(error); // Optional: Handle error
                            }
                          };

                          return (
                            <>
                              <tr>
                                <th scope="row" key={id} item={element}>
                                  {id + 1}
                                </th>
                                <td>{element.aff_link}</td>
                                <td>
                                  <ClipboardCopy copyText={element.aff_link} />
                                </td>

                                {/* <td>
                                  <div className="d-flex">
                                    <Link
                                      className="edit-link btn btn-primary shadow btn-xs sharp me-1 "
                                      to={`/editagent/${element.usAutoId}`}
                                      // to={`edit-agent/11`}
                                    >
                                      <i className="fa fa-pencil"> </i>
                                    </Link>

                                    <button
                                      onClick={handleDelete}
                                      className="btn btn-danger shadow btn-xs sharp"
                                    >
                                      <i className="fa fa-trash"></i>
                                    </button>
                                  </div>
                                </td> */}
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
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

export default AffiliateLinkList;
