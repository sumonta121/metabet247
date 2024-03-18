import React, { useState } from "react";
import jwt_decode from "jwt-decode";
// import NavBarContainer from "../../nav/navbar_container";

// Token
// const token = localStorage.getItem("jwtToken");
// // const decodedToken = jwt_decode(token);
// const decodedToken = token ? jwt_decode(token) : null;
// const userInfo = decodedToken;
// const userID = userInfo.user_id;
// const userEmail = userInfo.email;


export default class header_right extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.logoutUser = this.logoutUser.bind(this);

  // }

  // const auth_name = localStorage.getItem("auth_name");
  // const decodedauth_name = jwt_decode(auth_name);
  // console.log("Result " + decodedauth_name);

  // logout

  logoutUser() {
    localStorage.removeItem("jwtToken");
    window.location.replace("/");
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="header-content">
            <nav className="navbar navbar-expand">
              <div className="collapse navbar-collapse justify-content-between">
                <div className="header-left">
                  <div className="dashboard_bar">Agent  Dashboard</div>
                </div>
                <div className="navbar-nav header-right">
                  <div className="nav-item d-flex align-items-center">
                    <div className="input-group search-area">
                      <span className="input-group-text">
                        <a href="javascript:void(0)"></a>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here..."
                      />
                    </div>
                    &nbsp; &nbsp; &nbsp;
                    <div>
                      {/* Id: {userID} &nbsp;&nbsp; Email: {userEmail} &nbsp;&nbsp; */}
                      <button className="logout-btn" onClick={this.logoutUser}>
                        Lock Me!
                      </button>
                    </div>
                  </div>

                  {/* <div className="dz-side-menu">
                    <div className="search-coundry d-flex align-items-center">
                      <img src="assets/images/United.png" alt="" />
                      <select className="default-select dashboard-select image-select">
                        <option data-display="Eng">Eng</option>
                        <option value="2">Af</option>
                        <option value="2">Al</option>
                      </select>
                    </div>
                    <div className="sidebar-social-link ">
                      <ul>
                        <li className="nav-item dropdown notification_dropdown">
                          <a
                            className="nav-link "
                            href="#"
                            data-bs-toggle="dropdown"
                          >
                            
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <div
                              id="DZ_W_TimeLine02"
                              className="widget-timeline dz-scroll style-1 p-3 height370"
                            >
                              <h4 className="text-center border-bottom pb-2">
                                Notications
                              </h4>
                              <ul className="timeline">
                                <li>
                                  <div className="timeline-badge primary"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>10 minutes ago</span>
                                    <h6 className="mb-0">
                                      Youtube, a video-sharing website, goes
                                      live{" "}
                                      <strong className="text-primary">
                                        $500
                                      </strong>
                                      .
                                    </h6>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge info"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>20 minutes ago</span>
                                    <h6 className="mb-0">
                                      New order placed{" "}
                                      <strong className="text-info">
                                        #XF-2356.
                                      </strong>
                                    </h6>
                                    <p className="mb-0">
                                      Quisque a consequat ante Sit amet magna at
                                      volutapt...
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge danger"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>30 minutes ago</span>
                                    <h6 className="mb-0">
                                      john just buy your product{" "}
                                      <strong className="text-warning">
                                        Sell $250
                                      </strong>
                                    </h6>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge success"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>15 minutes ago</span>
                                    <h6 className="mb-0">
                                      StumbleUpon is acquired by eBay.{" "}
                                    </h6>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge warning"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>20 minutes ago</span>
                                    <h6 className="mb-0">
                                      Mashable, a news website and blog, goes
                                      live.
                                    </h6>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge dark"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>20 minutes ago</span>
                                    <h6 className="mb-0">
                                      Mashable, a news website and blog, goes
                                      live.
                                    </h6>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge primary"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>10 minutes ago</span>
                                    <h6 className="mb-0">
                                      Youtube, a video-sharing website, goes
                                      live{" "}
                                      <strong className="text-primary">
                                        $500
                                      </strong>
                                      .
                                    </h6>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge info"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>20 minutes ago</span>
                                    <h6 className="mb-0">
                                      New order placed{" "}
                                      <strong className="text-info">
                                        #XF-2356.
                                      </strong>
                                    </h6>
                                    <p className="mb-0">
                                      Quisque a consequat ante Sit amet magna at
                                      volutapt...
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge danger"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>30 minutes ago</span>
                                    <h6 className="mb-0">
                                      john just buy your product{" "}
                                      <strong className="text-warning">
                                        Sell $250
                                      </strong>
                                    </h6>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge success"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>15 minutes ago</span>
                                    <h6 className="mb-0">
                                      StumbleUpon is acquired by eBay.{" "}
                                    </h6>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge warning"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>20 minutes ago</span>
                                    <h6 className="mb-0">
                                      Mashable, a news website and blog, goes
                                      live.
                                    </h6>
                                  </a>
                                </li>
                                <li>
                                  <div className="timeline-badge dark"></div>
                                  <a
                                    className="timeline-panel text-muted"
                                    href="#"
                                  >
                                    <span>20 minutes ago</span>
                                    <h6 className="mb-0">
                                      Mashable, a news website and blog, goes
                                      live.
                                    </h6>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <a className="all-notification" href="#">
                              See all notifications{" "}
                              <i className="ti-arrow-end"></i>
                            </a>
                          </div>
                        </li>

                        <li className="nav-item dropdown notification_dropdown">
                          <a className="nav-link bell-link " href="#"></a>
                        </li>
                        <li className="nav-item dropdown notification_dropdown">
                          <a
                            className="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                          ></a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <div
                              id="DZ_W_Notification1"
                              className="widget-media dz-scroll p-3"
                              style={{ height: "380px" }}
                            >
                              <ul className="timeline">
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2">
                                      <img
                                        alt="image"
                                        width="50"
                                        src="assets/images/avatar/1.jpg"
                                      />
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Dr sultads Send you Photo
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2 media-info">
                                      KG
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Resport created successfully
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2 media-success">
                                      <i className="fa fa-home"></i>
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Reminder : Treatment Time!
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2">
                                      <img
                                        alt="image"
                                        width="50"
                                        src="assets/images/avatar/1.jpg"
                                      />
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Dr sultads Send you Photo
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2 media-danger">
                                      KG
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Resport created successfully
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2 media-primary">
                                      <i className="fa fa-home"></i>
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Reminder : Treatment Time!
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2">
                                      <img
                                        alt="image"
                                        width="50"
                                        src="assets/images/avatar/1.jpg"
                                      />
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Dr sultads Send you Photo
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2 media-info">
                                      KG
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Resport created successfully
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2 media-success">
                                      <i className="fa fa-home"></i>
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Reminder : Treatment Time!
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2">
                                      <img
                                        alt="image"
                                        width="50"
                                        src="assets/images/avatar/1.jpg"
                                      />
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Dr sultads Send you Photo
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2 media-danger">
                                      KG
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Resport created successfully
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-panel">
                                    <div className="media me-2 media-primary">
                                      <i className="fa fa-home"></i>
                                    </div>
                                    <div className="media-body">
                                      <h6 className="mb-1">
                                        Reminder : Treatment Time!
                                      </h6>
                                      <small className="d-block">
                                        29 July 2020 - 02:26 PM
                                      </small>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <a className="all-notification" href="#">
                              See all notifications{" "}
                              <i className="ti-arrow-end"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul>

                      

                      <li className="nav-item dropdown header-profile">
                        <a
                          className="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          <img src="assets/images/profile/pic1.jpg" alt="" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          style={{}}
                        >
                          <a
                            href="javascript:void(0)"
                            className="dropdown-item ai-icon "
                          >
                            <span className="ms-2">Profile </span>
                          </a>
                          <a
                            href="avascript:void(0)"
                            className="dropdown-item ai-icon "
                          >
                            <span className="ms-2">Message </span>
                          </a>
                          <a
                            href="avascript:void(0)"
                            className="dropdown-item ai-icon "
                          >
                            <span className="ms-2">Notification </span>
                          </a>
                          <a
                            href="avascript:void(0)"
                            className="dropdown-item ai-icon "
                          >
                            <span className="ms-2">Settings </span>
                          </a>
                          <a href="#" className="dropdown-item ai-icon">
                            <span className="ms-2">
                              <button
                                className="logout-btn"
                                onClick={this.logoutUser}
                              >
                                Logout
                              </button>
                            </span>
                          </a>
                        </div>
                      </li>

                    </ul>
                  </div> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
