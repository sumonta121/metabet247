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
const Deposit = () => {

  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const email = decodedToken ? decodedToken.email : null;
  const player_id = decodedToken ? decodedToken.id : null;
  const user_id = decodedToken ? decodedToken.user_id : null;

  const [BalancceReceived, setBalancceReceived] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadingReport, setIsLoadingReport] = useState(true);



    const [agentData, setAgentData] = useState([]);  
      
    const agentFetch = async () => {
      setIsLoading(true);
      try {
          const response = await axios.get(`/api/commonData/agent_list`);         
          const newData  = response.data;
          setAgentData(newData);        
          setIsLoading(false);
      } catch (error) {
          setError(error.message);
          setIsLoading(false);
      }
  };

  useEffect(() => {
      agentFetch();
    
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
                 Deposit From Agents
                </h1>
              </div>
            </div>
          </div>

          <div className="profile-section pb-20">
            <div className="container">
              <div className="">
                  <div className="description-table">
                            {isLoading &&   <div align="center" style={{ maxHeight: '50px' }} ><img style={{ maxHeight: '50px' }} src={process.env.PUBLIC_URL + '/assets/loader.svg'} /></div>  }
                        {error && <p> </p>}    
                            <table>
                            <tbody>
                                <tr>
                                    <th>Agent ID</th>
                                    <th>Connect</th>
                                </tr>                          
                                {agentData.map((item,index) => (
                                    <tr className="tb1"  key={item.id}>
                                        
                                        <td>{item.user_id}</td>
                                        <td>
                                            <a style={{ backgroundColor: '#ff000000'}} href={`https://wa.me/+${item.mobile}`} target='_blank'>
                                            <img style={{ maxHeight: '50px' }} src='https://cdn-icons-png.flaticon.com/512/3670/3670051.png' alt="WhatsApp Icon" />
                                            </a>
                                            
                                            <a style={{ backgroundColor: '#ff000000'}} href={`https:/t.me/${item.personal_mobile}`} target='_blank'>
                                            <img style={{ maxHeight: '50px' }} src='https://cdn-icons-png.flaticon.com/512/5968/5968804.png' alt="Telegram Icon" />
                                            </a>
                                        </td>                                           
                                        
                                    </tr>       
                                ))}
                            </tbody>
                        </table>

                        <div className="row mb-4 pt-1">
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/bkas.png"  style={{ maxHeight: '45px' }}  alt="icon" />
                                            </span>
                                            <span>bKash Deposit</span>
                                        </a>
                                        <a href="#">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/nagad.webp"  style={{ maxHeight: '42px' }}  alt="icon" />
                                            </span>
                                            <span>Nagad Deposit</span>
                                        </a>
                                        <a href="#">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/rocket.svg"  style={{ maxHeight: '45px' }}  alt="icon" />
                                            </span>
                                            <span>Rocket Deposit</span>
                                        </a>
                                        <a href="#">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                     <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/upay.svg"  style={{ maxHeight: '45px' }}  alt="icon" />
                                            </span>
                                            <span>uPay Deposit</span>
                                        </a>
                                        <a href="#">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/bitcoin.png" alt="icon" />
                                            </span>
                                            <span>Bitcoin</span>
                                        </a>
                                        <a href="#">
                                            <span> </span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/ethereum.png" alt="icon" />
                                            </span>
                                            <span>Ethereum</span>
                                        </a>
                                        <a href="#">
                                            <span> </span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/thether.png" alt="icon" />
                                            </span>
                                            <span>TETHER</span>
                                        </a>
                                        <a href="#">
                                            <span> 
                                        </span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/litecoin.png" alt="icon" />
                                            </span>
                                            <span>Litecoin</span>
                                        </a>
                                        <a href="#">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/master.png" alt="icon" />
                                            </span>
                                            <span>Master Card</span>
                                        </a>
                                        <a href="#">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/visa.png" alt="icon" />
                                            </span>
                                            <span>Visa Card</span>
                                        </a>
                                        <a href="#">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/paypal.png" alt="icon" />
                                            </span>
                                            <span>Paypal</span>
                                        </a>
                                        <a href="#">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/gplay.png" alt="icon" />
                                            </span>
                                            <span>Paypal</span>
                                        </a>
                                        <a href="#">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                </div>
                  </div>                  
              </div>             
            </div>
          </div>
             
          <Footer />
          <Link to="#" className="click-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
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


export default Deposit