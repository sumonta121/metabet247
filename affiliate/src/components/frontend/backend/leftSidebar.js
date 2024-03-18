import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import jwt_decode from "jwt-decode";

export default class leftSidebar extends Component {

  // logout
  logoutUser() {
    localStorage.removeItem("jwtToken");
    window.location.replace("/");
  }

  render() {

    // Token
    const token = localStorage.getItem("jwtToken");
    const decodedToken = jwt_decode(token);
    const userInfo = decodedToken;
    const CheckStatus = userInfo.status;

    return (
      <>
        <div className="deznav">
          <div className="deznav-scroll">
            <ul className="metismenu" id="menu">
              <li>
                <Link to="/affiliate" className="">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Agent Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="#" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Send Money</span>
                </Link>
              </li>

              <li>
                <Link to="/withdraw" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text"> Cash IN </span>
                </Link>
              </li>

           

              {/* Check: {CheckStatus} */}

              {/* {(CheckStatus == "MainAffiliate") ? <li><Link to="/subaffiliate-index" className=""><i class="material-icons">grid_view</i><span class="nav-text"> Create Sub Affiliate</span></Link></li> : null } */}

              {/* <li>
                <Link to="/subaffiliate-index" className="">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text"> Create Sub Affiliate</span>
                </Link>
              </li> */}

              <li>
                <Link to="/affiliate-link-list" className="">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text"> Refer Links </span>
                </Link>
              </li>

              {/* <li>
                <Link to="/affiliate-promocode-list" className="">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text"> Promo Codes </span>
                </Link>
              </li> */}

              <li>
                <a href="javascript:void(0);" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text"> Comission Report  </span>
                </a>
              </li>

              {/* <li>
                <a href="javascript:void(0);" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text"> Website </span>
                </a>
              </li> */}

              <li>
                <a href="javascript:void(0);" className="">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text"> Master Agent List </span>
                </a>
              </li>
{/* 
              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">description</i>
                  <span className="nav-text">Wallet Setup </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a href="javascript:void(0);">Crypto Currency </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Bank</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Mobile banking</a>
                  </li>
                </ul>
              </li> */}

              {/* 
              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">description</i>
                  <span className="nav-text">User Withdraw </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a href="javascript:void(0);">Pending</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Paid</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Rejected</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Block</a>
                  </li>
                </ul>
              </li> */}

              {/* Website Commission Structure Payment history Affiliate Links Promo
              codes Report Summary Full Report Marketing Tool Player Report Sub
              Affiliate Report contact Account */}

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">description</i>
                  <span className="nav-text">Report </span>
                </a>

                <ul ariaExpanded="false">
                  {/* <li>
                    <Link to="/"> Summary</Link>
                  </li> */}

                  <li>
                    <a href="javascript:void(0);" > Full Report</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);" > Payment history </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);" > Marketing Tool</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);"> Player Report</a>
                  </li>
{/* 
                  <li>
                    <a href="javascript:void(0);" > Sub Affiliate Report</a>
                  </li> */}

                  {/* <li>
                    <Link to="/balance-from-admin">
                      {" "}
                      Balance Receive from Admin
                    </Link>
                  </li> */}

                </ul>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">description</i>
                  <span className="nav-text">Account Manage </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <Link to="/profile-manage">Account Setting</Link>
                  </li>

                  <li>
                    <Link to="/password-manage">Password Manage</Link>
                  </li>

                  <li>
                    <Link to="/tpin-manage">S-Pin Manage</Link>
                  </li>

                  {/* <li>
                    <a href="javascript:void(0);">2-factor Authentication </a>
                  </li> */}
                </ul>
              </li>
              <li>
                <a href="#" className="" ariaExpanded="false">
                  <button className="btn btn-danger" onClick={this.logoutUser}>
                    Lock Me!
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
