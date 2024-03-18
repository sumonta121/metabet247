import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LeftSidebar = () => {
  // logout
  const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    window.location.replace("/");
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

    
    return (
      <>
        <div className="deznav">
          <div className="deznav-scroll">
            <ul className="metismenu" id="menu">
              <li>
                <Link to="/admin" className="" ariaExpanded="false">
                  <i class="material-icons">description</i>
                  <span class="nav-text">Master Admin Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/agent-index"
                  // className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Country Agent Create </span>
                </Link>
              </li>
              
              <li>
                <Link
                  to="/affiliate-index"
                  // className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Agent Create </span>
                </Link>
              </li>

              <li>
                <Link to="/agent-bal-list" className="" ariaExpanded="false">
                  <i class="material-icons">description</i>
                  <span class="nav-text">Country Agent Balance Transfer</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/agent-balance-report"
                  className=""
                  ariaExpanded="false"
                >
                  <i class="material-icons">description</i>
                  <span class="nav-text">Country Agent Balance Tr. Report</span>
                </Link>
              </li>

              <li>
                <Link to="/user-index" className="" ariaExpanded="false">
                  <i class="material-icons">description</i>
                  <span class="nav-text">User List</span>
                </Link>
              </li>








                          
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Send Money </span>
              </Link>
              </li>
              
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Create Force (Create Agent, CA,MA ) </span>
              </Link>
              </li>
              
              
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Force Manager ( edit delete) </span>
              </Link>
              </li>
              

              
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Statement (user / agent / ma / ca in out) </span>
              </Link>
              </li>
              
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Master Admin Report (Financial Report) </span>
              </Link>
              </li>
              
              
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Pending Withdrawal </span>
              </Link>
              </li>
              
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Notice Panel(Multiple users ma ca agent) </span>
              </Link>
              </li>
              
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Slide Manage </span>
              </Link>
              </li>
              
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Promotion Manage </span>
              </Link>
              </li>
              
              <li>
              <Link to="#" ariaExpanded="false" >
                <i className="material-icons">trending_up</i>
                <span className="nav-text">Daily User Report </span>
              </Link>
              </li>
              












              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Withdraw </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <Link to="/withdraw-pending">Pending</Link>
                  </li>

                  <li>
                    <Link to="/withdraw-paid">Paid</Link>
                  </li>

                  <li>
                    <Link to="/withdraw-rejected">Rejected</Link>
                  </li>

                  <li>
                    <Link to="/withdraw-block">Block</Link>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">P2p Manage </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="has-arrow "
                      ariaExpanded="false"
                    >
                      <i className="material-icons">trending_up</i>
                      <span className="nav-text">Pending Order </span>
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
                  </li>

                  <li>
                    <a href="javascript:void(0);">Payment Gateway Setup </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">P2p Report</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Game </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a href="javascript:void(0);">Live Casino</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">E-sports</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Sports</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Quick Bet</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="javascript:void(0);" className="" ariaExpanded="false">
                  <i class="material-icons">description</i>
                  <span class="nav-text">Game Setup (Decimal, Fraction)</span>
                </a>
              </li>

              <li>
                <a href="javascript:void(0);" className="" ariaExpanded="false">
                  <i class="material-icons">description</i>
                  <span class="nav-text">Translator</span>
                </a>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Report </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a href="javascript:void(0);">Current Bet</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Stack Bet</a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Pending Bet </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);"> Realise Bet </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);"> Blocked Bet </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);"> Win Bet </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);"> Lost Bet </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);"> Referral Income </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="javascript:void(0);" className="" ariaExpanded="false">
                  <i class="material-icons">description</i>
                  <span class="nav-text">Audit Report</span>
                </a>
              </li>

              <li>
                <a href="javascript:void(0);" className="" ariaExpanded="false">
                  <i class="material-icons">description</i>
                  <span class="nav-text">Activity Logs</span>
                </a>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Settings </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="has-arrow "
                      ariaExpanded="false"
                    >
                      Basic Info{" "}
                    </a>

                    <ul ariaExpanded="false">
                      <li>
                        <Link to="/basic-setting-list">Site Setting</Link>
                      </li>

                      <li>
                        <Link to="/slide-manage">Slide Manage</Link>
                      </li>

                      <li>
                        <Link to="/favicon-setting-list">Others</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/send-money-limit-list">Send Money Limit</Link>
                  </li>

                  {/* <li>
                    <Link to="/permission-setting">Permission Setting</Link>
                  </li> */}

                  <li>
                    <Link to="/notice-manage">Notice Manage </Link>
                  </li>

                  <li>
                    <Link to="/promo-code-list">Promo Code Manage</Link>
                  </li>

                  <li>
                    <a href="javascript:void(0);">SMS Setup </a>
                  </li>

                  <li>
                    <a href="javascript:void(0);">Payment Gateway </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">trending_up</i>
                  <span className="nav-text">Profile Manage </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <Link to="/profile-manage">Profile Setting</Link>
                  </li>

                  <li>
                    <Link to="/password-manage">Password Manage</Link>
                  </li>

                  <li>
                    <Link to="/tpin-manage">S-Pin Manage</Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className="" ariaExpanded="false">
                 <button className="btn btn-danger" onClick={logoutUser}>
                    Logout
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  
}


export default LeftSidebar;