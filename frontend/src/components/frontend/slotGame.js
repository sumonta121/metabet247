import React, { useState, useRef, useEffect, useCallback } from 'react';
import Loader from './include/loader';
import Nav from './include/nav';
import Footer from './include/footer';
import Slide from './include/slide';
import Leftmenu from './include/leftmenu';
import Rightmenu from './include/rightmenu';
import Signup from './include/signup';
import Signin from './include/signin';
import Betbalance from './include/betbalance.js';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import md5 from 'crypto-js/md5';
import CryptoJS from 'crypto-js';
import './Button.css';
import LoadingSpinner from "./user/include/LoadingSpinner";
import { v4 as uuidv4 } from 'uuid';
import "./GameCard.css";
const SlotGame = () => {
  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const email = decodedToken ? decodedToken.email : null;

 const [gameData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
    <div>
      {/* <Loader /> */}
      <Nav />
      <div className="main-body">
        <Leftmenu />
        <div className="body-middle">

          <div className="breadcumnd-banner">
            <div className="container">
              <div className="breadcumd-content">
                <h1>
                  Slot Games
                </h1>
              </div>
            </div>
          </div>

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
                      </div>
                    ))}
                 {isLoading &&   <div align="center" style={{ maxHeight: '50px' }} ><img style={{ maxHeight: '50px' }} src={process.env.PUBLIC_URL + '/assets/loader.svg'} /></div>  }
              {error && <p>Error: {error}</p>}    
                  </div>
                  
              </div>
             
            </div>
          </div>
             
          <Footer />
          <Link to="#0" className="click-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
            <i className="icon-basketball"></i>
          </Link>

        </div>
        <Rightmenu email={email} />
      </div>
      <Signup />
      <Signin />
      <Betbalance />
    </div>
  )
}


export default SlotGame