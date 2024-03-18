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
import './Table.css';
import LoadingSpinner from "./user/include/LoadingSpinner";
import { v4 as uuidv4 } from 'uuid';
import "./GameCard.css";
const BetHistory = () => {

  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const email = decodedToken ? decodedToken.email : null;
  const player_id = decodedToken ? decodedToken.id : null;

  const [gameData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 



  const fetchData = async (page) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`/api/bets/bettingHistory`,{
        page: page,
        player_id: player_id
      });
  
      const newData = response.data;
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
                Bet History
                </h1>
              </div>
            </div>
          </div>

          <div className="profile-section pb-20">
            <div className="container">
              <div className="">
                  <div className="description-table">
                    
                      <table >
                        <tbody>
                          <tr>
                              <th>SL</th>
                              <th>Amount</th>
                              <th>Currency</th>
                              <th>Game Name</th>
                              <th>Game Type</th>                        
                              <th>Transaction ID</th>                        
                              <th>Date</th>
                              <th>Status</th>                                      
                          </tr>                          
                            {gameData.map((item,index) => (
                              <tr className="tb1"  key={item.id}>
                                  <td>
                                      <span className="text1">{index+1}</span>
                                  </td>
                                  <td>{item.amount}</td>
                                  <td>{item.currency}</td>
                                  <td>{item.amount}</td>
                                  <td>{item.type}</td>
                                  <td>{item.amount}</td>
                                  <td>{item.createdAt}</td>
                                  <td><span className="text1">Paid</span></td>
                              </tr>       
                          ))}
                        </tbody>
                    </table>
                
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


export default BetHistory