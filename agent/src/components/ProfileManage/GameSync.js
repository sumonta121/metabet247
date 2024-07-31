import React, { useState, useEffect } from "react";
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import jwt_decode from "jwt-decode";
import axios from "axios";
import apiConfig from '../apiConfig';
import { v4 as uuidv4 } from 'uuid';


const GameSync = () => {
  const history = useHistory();

  // Token
  const token = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo = decodedToken;
  const user_id = userInfo.user_id;

  
 const [gameData, setData] = useState([]);
 const [currentPage, setCurrentPage] = useState(100);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);

 
 const fetchData = async (page) => {
   setIsLoading(true);
   try {
     const response = await axios.get(`/api/games/gamelist?page=${page}`);
     const newData = response.data.items;
     setData((prevData) => [...prevData, ...newData]);
     setCurrentPage(page);
     setIsLoading(false);
   } catch (error) {
     setError(error.message);
     setIsLoading(false);
   }
 };

 useEffect(() => {
   fetchData(currentPage);
 }, []);


 useEffect(() => {
   const script = document.createElement('script');
   script.src = '/assets/js/main.js';
   script.async = true;
   document.head.appendChild(script);
 }, []);


 const handleScroll = () => {
   // if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) { 
     if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
     const nextPage = currentPage + 1;
     fetchData(nextPage);
   }else if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
     const nextPage = currentPage + 1;
     fetchData(nextPage);
   }
 };

 useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, [currentPage]);

 let windowInstance = null;
 const handleClick = async (gameuuid) => {
   if (decodedToken === null) {
      alert('Please login to your account');
       //localStorage.removeItem("jwtToken");
       // window.location.replace("/#/login");
       window.location.hash = 'login';
       return;
   } else {
       const currency    = 'EUR';
       const game_uuid   = gameuuid;
       const player_id   = decodedToken.id;
       const player_name = decodedToken.handle;
       const session_id  = uuidv4();
       
       
       const res = await axios.post(`/api/games/gameinit?currency=${currency}&game_uuid=${game_uuid}&player_id=${player_id}&player_name=${player_name}&session_id=${session_id}`)

       const url = res.data.url; 
       if (windowInstance && !windowInstance.closed) {
         windowInstance.location.href = url;
       } else {
         const windowFeatures = `width=${window.screen.availWidth},height=${window.screen.availHeight},menubar=no,toolbar=no,location=no,resizable=yes,status=no`;
         windowInstance = window.open(url, '_blank', windowFeatures);
       }
   }

 }

 
  return (
    <>
    <div id="main-wrapper">
      <Navbar />
      <Chatbox />
      <HeaderRight />
      <LeftSidebar />

      <div className="content-body">
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Security T-pin Manage</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                <div className="profile-section pb-20">
                  <div className="container">
                    <div className="varification">
                  
                        <div className="row mb-4 card-container">
                          {gameData.map((game) => (                  
                            <div className="custom_card col-xl-3 col-md-3  col-xs-6 col-6">
                              <img className="card-image" src={game.image} alt={game.name} />
                              <div className="card-overlay">
                                <div className="play-button">    <button type="button" className="play_button" onClick={() => handleClick(game.uuid)}>Play</button></div>
                              </div>
                              <div className="title">{game.name}</div>
                              <div className="title">pro {game.provider}</div>
                            </div>
                          ))}
                      {isLoading &&   <div align="center" style={{ maxHeight: '50px' }} ><img style={{ maxHeight: '50px' }} src={process.env.PUBLIC_URL + '/assets/loader.svg'} /></div>  }
                    {error && <p>Error: {error}</p>}    
                        </div>
                        
                    </div>
                  
                  </div>
                </div>
                  

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
        </div>
    </>
  );
};

export default GameSync;
