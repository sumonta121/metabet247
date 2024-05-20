import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from "./include/loader";
import MainContent from "./include/maincontent.js";
import Navbar from "./backend/navbar.js";
import Footer from "./backend/footer.js";
import Chatbox from "./backend/chatbox.js";
import HeaderRight from "./backend/header_right.js";
import LeftSidebar from "./backend/leftSidebar.js";
import Content from "./backend/content.js";

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      {/* <Loader /> */}
      {/* <div id="loader"></div> */}

      <div id="main-wrapper" className="show">
        <Navbar />
        <Chatbox />
        <HeaderRight />
        <LeftSidebar />

        {/* <Outlet /> */}
        
        <Content />
        {/* <MainContent /> */}

        <Footer />
      </div>

      {/* <MainContent /> */}
      
    </>
  );
};

export default Index;
