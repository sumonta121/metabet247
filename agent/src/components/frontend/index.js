import React from "react";
import { Switch, Route } from 'react-router-dom';
import Loader from "./include/loader";

import MainContent from "./include/maincontent.js";

import Navbar from "./backend/navbar.js";
import Footer from "./backend/footer.js";
import Chatbox from "./backend/chatbox.js";
import HeaderRight from "./backend/header_right.js";
import LeftSidebar from "./backend/leftSidebar.js";
import DashContent from "./backend/dashContent.js";


const index = () => {
  return (
    <>
      {/* <Loader /> */}
      {/* <div id="loader"></div> */}
      <div id="main-wrapper">
        <Navbar />
         <Chatbox />
         <HeaderRight />
         <LeftSidebar />
            {/* <Outlet /> */}
             <DashContent />
            {/* <MainContent /> */}
        <Footer />
      </div>
      {/* <MainContent /> */}
    </>
  );
};

export default index;
