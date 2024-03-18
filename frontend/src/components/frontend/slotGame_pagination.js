import React, { useEffect, useState } from 'react';
import Loader from './include/loader';
import Nav from './include/nav';
import Footer from './include/footer';
import Slide from './include/slide';
import Leftmenu from './include/leftmenu';
import Rightmenu from './include/rightmenu';
import Signup from './include/signup';
import Signin from './include/signin';
import Betbalance from './include/betbalance.js';
import slotGames from './include/slotGames.js';
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
  const [isLoadingReport, setIsLoadingReport] = useState(true);
  const [error, setError] = useState(null);
  const [paginationLinks, setPaginationLinks] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const perPage = 10; // Number of items per page


  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);


  
  const fetchData = async (currentPage) => {
    try {
    /// const response = await fetch(`https://wicked-fox-baseball-cap.cyclic.app/api/games/gamelist`);
    //  const response = await fetch(`/api/games/gamelist`);
    //   const data = await response.json();
    //   console.log(data.items);
    //   setData(data.items);
    //const response = await axios.get(`/api/games/gamelist`);
    const response = await axios.get(`/api/games/gamelist?page=${currentPage}`);
    setData(response.data.items);
    
     setTotalCount(response.data._meta.totalCount);
      setIsLoadingReport(false);
    } catch (error) {
      setError(error.message);
      setIsLoadingReport(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(totalCount / perPage);

  
  const handleClick = async (gameuuid) => {
    if (decodedToken === null) {
      // Show alert message
      alert('Please login to your account');
      //window.location.href = '/login';
      return;
    }

    const currency = 'EUR';
    const game_uuid = gameuuid;
    const player_id = decodedToken.id;
    const player_name = decodedToken.handle;
    const session_id = uuidv4();

    //const res = await axios.post(`https://wicked-fox-baseball-cap.cyclic.app/api/games/gameinit?currency=${currency}&game_uuid=${game_uuid}&player_id=${player_id}&player_name=${player_name}&session_id=${session_id}`)
    const res = await axios.post(`/api/games/gameinit?currency=${currency}&game_uuid=${game_uuid}&player_id=${player_id}&player_name=${player_name}&session_id=${session_id}`)

    const url = res.data.url; 
    console.log(url)
    const windowFeatures = `width=${window.screen.availWidth},height=${window.screen.availHeight},menubar=no,toolbar=no,location=no,resizable=yes,status=no`;
    window.open(url, '_blank', windowFeatures);

    // console.log(json)
    // const url = json.url;
    // const windowFeatures = `width=${window.screen.availWidth},height=${window.screen.availHeight},menubar=no,toolbar=no,location=no,resizable=yes,status=no`;
    //  window.open(url, '_blank', windowFeatures);
  }




  return (
    <>
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
                      // <div className="col-xxl-2 col-xl-4" key={game.uuid} >
                      //   {game.name}
                      //   <div className="form-grp">
                      //     <img style={{ maxHeight: '165px' }} src={game.image} alt={game.name} />
                      //   </div>
                      //   <h4 style={{ fontSize: '15px', paddingTop: '10px' }}> Type: {game.type}</h4>
                      //   <h4 style={{ fontSize: '15px' }}>Provider: {game.provider}</h4>
                      //   <button type="button" className="play_button" onClick={() => handleClick(game.uuid)}>Play</button>
                      //   {/* <button onClick={() => this.handleClick(game.uuid, 'nazmul')}>Play</button> */}
                      // </div>                     

                      // <div className="image-container col-xxl-2 col-xl-4" key={game.uuid}>
                      //   <img src={game.image} alt={game.name}
                      //     className="image"
                      //   />
                      //   <div className="overlay">
                      //     <div className="play-button">
                      //     <button type="button" className="play_button" onClick={() => handleClick(game.uuid)}>Play</button>
                      //     </div>
                      //   </div>
                      // </div>

                      <div className="custom_card col-xl-3 col-md-3  col-xs-6 col-6">
                        <img className="card-image" src={game.image} alt={game.name} />
                        <div className="card-overlay">
                          <div className="play-button">    <button type="button" className="play_button" onClick={() => handleClick(game.uuid)}>Play</button></div>
                        </div>
                        <div className="title">{game.name}</div>
                      </div>

                        ))}

                        {paginationLinks && paginationLinks.first && (
                          <div>
                            <span>First: {paginationLinks.first.href}</span>
                            {paginationLinks.prev && <span>Previous: {paginationLinks.prev.href}</span>}
                            {paginationLinks.next && <span>Next: {paginationLinks.next.href}</span>}
                            <span>Last: {paginationLinks.last.href}</span>
                          </div>
                        )}
                  </div>
              </div>
                    
              <Pagination
                totalCount={totalCount}
                currentPage={currentPage}
                perPage={perPage}
                onPageChange={handlePageChange}
              />
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
    </>
  )
}



const Pagination = ({ totalCount, currentPage, perPage, onPageChange }) => {
  const pageCount = Math.ceil(totalCount / perPage);
  const visiblePages = 5; // Number of visible page links

  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(pageCount, startPage + visiblePages - 1);

  const pageRange = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li className="page-item">
          <a className="page-link"  onClick={() => onPageChange(currentPage - 1)}>
            Previous
          </a>
        </li>
      )}
      {pageRange.map((page) => (
        <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
          <a className="page-link"  onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
      {currentPage < pageCount && (
        <li className="page-item">
          <a className="page-link"  onClick={() => onPageChange(currentPage + 1)}>
            Next
          </a>
        </li>
      )}
    </ul>
  );
};

export default SlotGame