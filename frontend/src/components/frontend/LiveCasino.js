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

const Casino = () => {
  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const email = decodedToken ? decodedToken.email : null;
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.head.appendChild(script);
  }, []); 

  const [getProvider, setProvider] = useState([]);
  const [getfetchGameType, setGameType] = useState([]);
  const [gameData, setGameData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
   
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedGameType, setSelectedGameType] = useState(null)
  const [currentPageProvider, setCurrentPageProvider] = useState(1);
  const [currentPageGameType, setCurrentPageGameType] = useState(1);

  const fetchData = async (page, providerName = null, gameType = null) => {
    setIsLoading(true);
    try {
      let url = `/api/casino/livecasinolist?page=${page}`;
      if (providerName) {
        url = `/api/casino/gamelistbyprovider?providerName=${providerName}&page=${page}`;
      } else if (gameType) {
        url = `/api/casino/gamelistbytype?gameType=${gameType}&page=${page}`;
      }

      const response = await axios.get(url);
      const { data, currentPage, totalPages } = response.data; 

      if (data.length === 0) {
        setGameData([]);
        setIsLoading(false);
        setError("No data found");
        return;
      }{
        setError("");
      }

      
      setGameData((prevData) => [...prevData, ...data]);
      setCurrentPage(currentPage);
      setCurrentPageProvider(currentPage);
      setCurrentPageGameType(currentPage);
      setIsLoading(false);
    } catch (error) {
      // Handle error
      setIsLoading(false);
    }
  };


  // const fetchData = async (page) => {
  //   setIsLoading(true);
  //   try {

  //     const response = await axios.get(`/api/casino/gamelist?page=${page}`);
  //     const { data, currentPage, totalPages } = response.data; 
  //     setGameData((prevData) => [...prevData, ...data]);
  //     setCurrentPage(currentPage);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setIsLoading(false);
  //   }
  // };

  const fetchProvider = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/casino/providerlist`);
      setProvider(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const fetchGameType = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/casino/gametypelist`);
      console.log(response.data);  
      setGameType(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
    fetchProvider();
    fetchGameType();
  }, []);


  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
     
      if (selectedProvider) {
        const nextPage = currentPage + 1;
        fetchData(nextPage, selectedProvider);
      } else if (selectedGameType) {
        const nextPage = currentPage + 1;
        fetchData(nextPage, null, selectedGameType);
      } else {
        const nextPage = currentPage + 1;
        fetchData(nextPage);
      }
    }
  };
  
  // const handleScroll = () => {
  //   // if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) { 
  //     if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
  //         const nextPage = currentPage + 1;
  //       if (selectedProvider) {
  //         fetchData(1, selectedProvider);
  //       } else if (selectedGameType) {
  //         fetchData(1, null, selectedGameType);
  //       } else {
  //         fetchData(nextPage);
  //       }
  //   }else if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
  //         const nextPage = currentPage + 1;
  //       if (selectedProvider) {
  //         fetchData(1, selectedProvider);
  //       } else if (selectedGameType) {
  //         fetchData(1, null, selectedGameType);
  //       } else {
  //         fetchData(nextPage);
  //       }
  //   }
  // };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, currentPageProvider, currentPageGameType, selectedProvider, selectedGameType]);


  let windowInstance = null;
  const handleClick = async (gameuuid) => {
    if (decodedToken === null) {
       alert('Please login to your account');
        //localStorage.removeItem("jwtToken");
        // window.location.replace("/#/login");
        window.location.hash = 'login';
        return;
    } else {
        const currency    = 'BDT';
        const game_uuid   = gameuuid;
        const player_id   = decodedToken.id;
        const player_name = decodedToken.handle;
        const session_id  = uuidv4();       
        const res = await axios.post(`/api/games/gameinit?currency=${currency}&game_uuid=${game_uuid}&player_id=${player_id}&player_name=${player_name}&session_id=${session_id}`);

        const url = res.data.url; 
        if (windowInstance && !windowInstance.closed) {
          windowInstance.location.href = url;
        } else {
          const windowFeatures = `width=${window.screen.availWidth},height=${window.screen.availHeight},menubar=no,toolbar=no,location=no,resizable=yes,status=no`;
          windowInstance = window.open(url, '_blank', windowFeatures);
        }
    }
  }
  
  // Update selectedProvider and currentPageProvider when a provider button is clicked
  const handleProviderClick = useCallback(async (providerName) => {
    setGameData([]); // Clear existing data
    setCurrentPageProvider(1); // Reset current page for provider
    setSelectedGameType(null); // Clear selectedGameType
    setSelectedProvider(providerName); // Set selectedProvider
    fetchData(1, providerName);
  }, []);

  // Update selectedGameType and currentPageGameType when a game type button is clicked
  const handleGameTypeClick = useCallback(async (gameType) => {
    setGameData([]); // Clear existing data
    setCurrentPageGameType(1); // Reset current page for game type
    setSelectedProvider(null); // Clear selectedProvider
    setSelectedGameType(gameType); // Set selectedGameType
    fetchData(1, null, gameType);
  }, []);

   
  const handleSearch = async () => {
    if (!searchQuery) return;
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/casino/searchgame?search=${searchQuery}`);
      const searchData = response.data.data;

      if (searchData.length === 0) {
        setGameData([]);
        setIsLoading(false);
        setError("No matching games found");
        return;
      } else {
        setError("");
      }

      setGameData(searchData);
      setIsLoading(false);
    } catch (error) {
      setError("An error occurred while searching.");
      setIsLoading(false);
    }
  };


//  Game type show starts here
const [searchQuery, setSearchQuery] = useState('');
const [isSearchActive, setIsSearchActive] = useState(false);

const toggleSearchInput = () => {
  setIsSearchActive(!isSearchActive);
  if (!isSearchActive) {
    setSearchQuery('');
  }
};

// const performSearch = () => {
//   const lowerCaseQuery = searchQuery.toLowerCase();
//   const pillButtons = document.getElementsByClassName('pill-button');

//   for (const button of pillButtons) {
//     const buttonText = button.textContent.toLowerCase();
//     if (buttonText.includes(lowerCaseQuery)) {
//       button.style.display = 'inline-block';
//     } else {
//       button.style.display = 'none';
//     }
//   }
// };

// const resetSearch = () => {
//   setSearchQuery('');
//   const pillButtons = document.getElementsByClassName('pill-button');
//   for (const button of pillButtons) {
//     button.style.display = 'inline-block';
//   }
// };

const searchInputContainerClass = isSearchActive ? 'search-input-container active' : 'search-input-container';
const searchButtonStyle = isSearchActive ? { display: 'inline-block' } : { display: 'none' };


//  Game type show end here

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
               Live Casino Games
                </h1>
              </div>
            </div>
          </div>

          <div className="profile-section pb-20">
            <div className="container">
            <div className="banner-feature">

                <div className="scrollable-container">
                  <div className="pill-buttons">
                  <button className="pill-button">Providers</button>    
                    <button id="searchIcon" className="pill-button" onClick={toggleSearchInput}>
                        <i class="fas fa-magnifying-glass"></i>
                    </button>
                    <div className={searchInputContainerClass} id="searchInputContainer">

                          <input
                          type="text"
                          id="searchInput"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                         
                          placeholder="Search Games..."
                        />
                        <button
                          id="searchButton"
                          style={searchButtonStyle}
                          onClick={handleSearch}
                        >
                          Search
                        </button>                  
                      </div>
                      
                    {getProvider.map((providerName) => (                   
                      <button className="pill-button"  onClick={() => handleProviderClick(providerName)} >{providerName}</button>                
                    ))}
                  </div>
                </div>
         
                <div className="scrollable-container">
                  <div className="pill-buttons">
                  <button className="pill-button">Games</button>    
                    {getfetchGameType.map((gameType) => (                   
                      <button className="pill-button"  onClick={() => handleGameTypeClick(gameType)} >{gameType}</button>                
                    ))}
                  </div>
                </div>            
              </div>

              <div className="varification">
            
                  <div className="row mb-4 card-container">
                    {gameData.map((game) => (                  
                      <div className="custom_card col-xl-3 col-md-3  col-xs-6 col-6">
                        <img className="card-image" src={game.image} alt={game.name} />
                        <div className="card-overlay">
                          <div className="play-button">  
                            <button type="button" className="play_button" onClick={() => handleClick(game.uuid)}>Play</button></div>
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


export default Casino