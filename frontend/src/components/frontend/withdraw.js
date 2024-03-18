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
import jwt_decode from 'jwt-decode';
import { Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import md5 from 'crypto-js/md5';
import CryptoJS from 'crypto-js';
import './Button.css';
import './Table.css';
import LoadingSpinner from "./user/include/LoadingSpinner";
import { v4 as uuidv4 } from 'uuid';
import "./GameCard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Withdraw = () => {

  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const email = decodedToken ? decodedToken.email : null;
  const player_id = decodedToken ? decodedToken.id : null;
  const user_id = decodedToken ? decodedToken.user_id : null;
  const id = decodedToken ? decodedToken.id : null;

  const [BalancceReceived, setBalancceReceived] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadingReport, setIsLoadingReport] = useState(true);
  const [isButtonDisabled, setisButtonDisabled] = useState(false);
  const [withdrawFormData, setWithdrawFormData] = useState({ 
    id: id,
    amount: '',
    reseller_userid: '',
    security_pin: '',
  });
  
  const history = useHistory();


  const handleWithdrawInputChange = (event) => {
    setWithdrawFormData({
      ...withdrawFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleWithdraw = async (event) => {
    event.preventDefault();
    setisButtonDisabled(true);
    try {
      const response = await axios.post('/api/withdraw/withdraw_to_reseller', withdrawFormData);
      toast.success(response.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        zIndex: 1000,
      });
       setisButtonDisabled(false);

       history.push('/withdraw-list');
    } catch (error) {     
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 3000,
              zIndex: 1000,
            });
          } else {
            toast.error('An error occurred', {  // Fallback message if the error doesn't have a specific message
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 3000,
              zIndex: 1000,
            });
          }
        setisButtonDisabled(false);
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
                <h2>
                Balance Withdraw 
                </h2>
              </div>
            </div>
          </div>

          <div className="profile-section pb-20">
            <div className="container">
              <div className="">
                 <div className="varification">
                    <form onSubmit={handleWithdraw}>
                      <div className="row g-3">
                          <div className="col-lg-6">
                              <div className="form-grp form-grp-two">
                                  <input type="text" placeholder="Enter Amount" name='amount' value={withdrawFormData.amount} onChange={handleWithdrawInputChange}/>
                                  <i className="fas fa-usd"></i>
                              </div>
                          </div>
                      
                          {/* <div className="col-lg-6">
                              <div className="form-grp form-grp-two">
                                  <input type="text" placeholder="Enter Agent ID" name='reseller_userid' value={withdrawFormData.reseller_userid} onChange={handleWithdrawInputChange}/>
                                  <i className="fas fa-user"></i>
                              </div>
                          </div> */}

                          <div className="col-lg-6">
                              <div className="form-grp form-grp-two">
                              
                                  <input type="password" placeholder="Enter Transaction Password" name='security_pin' value={withdrawFormData.security_pin} onChange={handleWithdrawInputChange}/>
                                  <i className="fas fa-key"></i>
                              </div>
                              <label style={{color:'red'}}> *Default Transaction Password, is login password, change from settings </label>
                          </div>
                  
                          <div className="col-lg-12" align="right">
                              <div className="form-grp">
                                  <button className="btn btn-primary" style={{ fontSize:'14px' }}   disabled={isButtonDisabled} type="submit" >
                                  {isButtonDisabled ? <LoadingSpinner />: 'Withdraw'}
                                  </button>
                              </div>
                          </div>
                          </div>
                      </form>
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


export default Withdraw