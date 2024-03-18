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
import './Button.css';
import './Table.css';
import LoadingSpinner from "./user/include/LoadingSpinner";
import "./GameCard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const WithdrawList = () => {

  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const email = decodedToken ? decodedToken.email : null;
  const user_id = decodedToken ? decodedToken.user_id : null;

  const [gameData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (page) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`/api/withdraw/withdrawHistory`,{
        page: page,
        user_id: user_id
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

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    const voucharToCopy = gameData[index].voucher;
    navigator.clipboard.writeText(voucharToCopy);
    setCopiedIndex(index);

    // Show toast notification
    toast.success('Copied to clipboard!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div>
       <ToastContainer style={{ zIndex: 99999999999 }}  />
      {/* <Loader /> */}
      <Nav />
      <div className="main-body">
        <Leftmenu />
        <div className="body-middle">

          <div className="breadcumnd-banner">
            <div className="container">
              <div className="breadcumd-content">
                <h2>
                Withdraw History
                </h2>
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
                              <th>Pay Amount</th>
                              <th>Agent</th>                        
                              <th>Transaction ID</th>                        
                              <th>Voucher ID</th>                        
                              <th>Date</th>
                              <th>Status</th>                                      
                          </tr>                          
                            {gameData.map((item,index) => (
                              <tr className="tb1"  key={item.id}>
                                  <td>
                                      <span className="text1">{index+1}</span>
                                  </td>
                                  <td>{item.amount}</td>
                                  <td>{item.pay_amount}</td>
                                  <td>{item.receiver_user_id}</td>
                                  <td>{item.transaction_id}</td>
                                  <td>
                                      <span onClick={() => handleCopy(index)}>
                                        {item.voucher}{' '}
                                        <i className='fas fa-clipboard-list'></i>
                                      </span>                                    
                                    </td>
                                  
                                  <td>{item.createdAt}</td>
                                  <td>  
                                     <span className={`btn btn-sm ${item.status_type === 0 ? 'btn-info' : item.status_type === 1 ? 'btn-success' : 'btn-danger'}`}>
                                        {item.status_type === 0 ? 'Pending' : item.status_type === 1 ? 'Paid' : 'Rejected'}
                                      </span>
                                   </td>
                               </tr>       
                          ))}
                        </tbody>
                    </table>
                
                 {isLoading &&   <div align="center" style={{ maxHeight: '50px' }} ><img style={{ maxHeight: '50px' }} src={process.env.PUBLIC_URL + '/assets/loader.svg'} /></div>  }
              {error && <p></p>}    
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


export default WithdrawList