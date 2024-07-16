import React, { Component, useEffect, useState } from "react";
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
    const user_role =  userInfo.role_as;




    const createAgent = (() => {
      if(user_role === 2){
        return (
          <Link to="/subreseller-index" className="" ariaExpanded="false">
            <i class="material-icons">grid_view</i>
            <span class="nav-text"> Create Super Agent </span>
          </Link>
        );
      } else if(user_role === 2.1) {
        return (
          <Link to="/affiliate-index" className="" ariaExpanded="false">
          <i class="material-icons">grid_view</i>
          <span class="nav-text"> Create Master Agent </span>
        </Link>         
        );
      }
    })();


    const cashInReport = (() => {
      if(user_role === 4){
        return (
              <li>
                <a href="javascript:void(0);" className="has-arrow " ariaExpanded="false">
                  <i className="material-icons">description</i>
                  <span className="nav-text">List</span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    {/* <Link to="/cashin">Cash In Voucher</Link>
                    <Link to="/cashin-history">Cash In History</Link> */}
                    {/* <Link to="/master-agent-list">Super Agent List (Deposit)</Link> */}
                    <Link to="/reffered-list">Reffered List </Link>
                  </li>
                </ul>
              </li>
        );
      } 
    })();

    

    return (
      <>
        <div className="deznav">
          <div className="deznav-scroll">
            <ul className="metismenu" id="menu">
              <li>
                <Link to="/agent" className="" ariaExpanded="false">
                  <i class="material-icons">grid_view</i>
                  <span class="nav-text">Dashboard</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/agent" className="" ariaExpanded="false">
                  <i class="material-icons">credit_card</i>
                  <span class="nav-text">Transaction</span>
                </Link>
              </li>
               */}
              <li>
                <Link to="/user-balance-report" className="" ariaExpanded="false">
                  <i class="material-icons">credit_card</i>
                  <span class="nav-text">Send Money</span>
                </Link>
              </li>
      
              <li>
                 <Link to="/balance-deposit" className="" ariaExpanded="false">
                       <i class="material-icons">credit_card</i>
                      <span class="nav-text">Balance Deposit </span>
                    </Link>
              </li>

            
              <li>
                   <Link to="/balance-from-admin" className="" ariaExpanded="false">
                   <i class="material-icons">credit_card</i>
                     <span class="nav-text"> Deposit Received Report</span>
                    </Link>
              </li>

              <li>
                 <Link to="/pending-balance-request" className="" ariaExpanded="false">
                       <i class="material-icons">credit_card</i>
                      <span class="nav-text">Pending Deposit Request </span>
                    </Link>
              </li>
              <li>
                 <Link to="/pending-withdraw-request" className="" ariaExpanded="false">
                       <i class="material-icons">credit_card</i>
                      <span class="nav-text">Pending withdraw Request </span>
                    </Link>
              </li>

              {/* <li>
                 <Link to="/balance-withdraw-history" className="" ariaExpanded="false">
                       <i class="material-icons">credit_card</i>
                      <span class="nav-text">Balance Withdraw</span>
                    </Link>
              </li> */}


              <li>
                   <Link to="/add-wallet-list" className="" ariaExpanded="false">
                     <i class="material-icons">credit_card</i>
                     <span class="nav-text"> Add Wallet</span>
                    </Link>
              </li> 


              {/* <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">description</i>
                  <span className="nav-text"> Send Money </span>
                </a>

                <ul ariaExpanded="false">
                  <li>
                    <Link to="/user-bal-list" className="" ariaExpanded="false">
                      <span class="nav-text">User Balance Transfer</span>
                    </Link>
                  </li>

                  <li>
                  
                    <Link to="/user-balance-report">
                      <span class="nav-text">Balance Report</span>{" "}
                    </Link>
                  </li>
                </ul>
              </li> */}

        
              { cashInReport }

             {/*   <li>
                <a href="javascript:void(0);" className="has-arrow " ariaExpanded="false">
                  <i className="material-icons">description</i>
                  <span className="nav-text">Cashin In  (Sub Reseller) </span>
                </a>
                <ul ariaExpanded="false">
                  <li>
                    <Link to="/withdraw">Cash In Voucher</Link>
                    <Link to="/withdraw">Cash In History</Link>
                  </li>
                </ul>
              </li>   */}
              
              <li>
                {createAgent}
              </li> 
           
              <li>
                <a
                  href="javascript:void(0);"
                  className="has-arrow "
                  ariaExpanded="false"
                >
                  <i className="material-icons">description</i>
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
                  {/* <li>
                    <a href="javascript:void(0);">2-factor Authentication </a>
                  </li> */}
                </ul>
              </li>

              <li>
                <Link to="/chats" className="" ariaExpanded="false">
                  <i class="material-icons">credit_card</i>
                  <span class="nav-text">Chats</span>
                </Link>
              </li>
      
              <li>
                <Link to="/new-chats" className="" ariaExpanded="false">
                  <i class="material-icons">credit_card</i>
                  <span class="nav-text">New Chats</span>
                </Link>
              </li>
      
              <li>
                <a href="#" className="" ariaExpanded="false">
                  <button className=" btn btn-danger" onClick={this.logoutUser}>
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
