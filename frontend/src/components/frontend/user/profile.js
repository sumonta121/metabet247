import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from "./include/LoadingSpinner";
import { Link, useHistory} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jwt_decode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserProfile.css'; 

const Profile = ({ email }) => {

const token = localStorage.getItem('jwtToken');
const user_details = token ? jwt_decode(token) : null;
const id = user_details ? user_details.id : null;
const user_id = user_details ? user_details.user_id : null;
const history = useHistory();

  const [isButtonDisabled, setisButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    id: id,
    first_name: '',
    last_name: '',
    dob: '',
    address: '',
    zip: '',
    city: '',
    state: '',
    country: '',   
    email: '',   
    country_currency: '',   
    mobile: ''   
  });

   const [withdrawFormData, setWithdrawFormData] = useState({ 
    id: id,
    amount: '',
    reseller_userid: '',
    security_pin: '',
  });
  


  const [user, setUser] = useState({});
  const [startDate, setStartDate] = useState(null);
   useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/singleUserBalance/${user_id}`);
        setUser(response.data);
        setFormData(response.data);
        
        if (!response.data.dob) {
            setStartDate(new Date()); // Set the startDate to the current date if dob is empty
        } else {
            // If response.data.dob is not empty, convert it to a valid Date object and set as startDate
            // const parsedDob = response.data.dob.split("/");
            // const validDob = new Date(parsedDob[2], parsedDob[1] - 1, parsedDob[0]);
            // setStartDate(validDob);
            setStartDate(new Date(response.data.dob));
        }
       
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [user_id]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);


  const userContent = (() => {
    if (isLoading) {
      return <LoadingSpinner />;
    } else if (user) {
      return (
        <>
        <div>
        <div className="profile-card">
        <div className="left-side">
          <div className="profile-header">
            {/* <img src="profile-picture.jpg" alt="Profile Picture" className="profile-picture" /> */}
            <div className="username">{user.user_id}</div>
          </div>
          <div className="basic-info">
            <p>User ID: {user.user_id}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
          </div>
        </div>
        <div className="right-side">
          <div className="profile-header">
               <div className="username" align="center">{user.first_name} {user.last_name}</div>
          </div>
          <div className="personal-info">
            <p>Current Balance:  ${user.currency}</p>
            <p>Phone: {user.mobile}</p>
            <p>Currency : {user.country_currency}</p>
          </div>
        </div>
      </div>

        </div>
        </>
      );
    } else {
      return <div></div>;
    }
  })();


  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/profile_update', formData);
      console.log('User updated successfully:', response.data);
      
      toast.success(response.data, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {     
      if (error.response && error.response.data && error.response.data.msg) {
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
     
        toast.error('Failed to update profile. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    }
   }

   const [formPassData, sethandlePassChange] = useState({ 
    id: id,
    old_passowrd: '',
    new_password: '',
    confirm_password: '',
  });
 
 
  const handlePassChange = (event) => {
    sethandlePassChange({
      ...formPassData,
      [event.target.name]: event.target.value,
    });
  };

  const handlePassSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/profile_password_update', formPassData);
      console.log('User updated successfully:', response.data);
        
      sethandlePassChange({
        old_passowrd: '',
        new_password: '',
        confirm_password: '',
      });

      toast.success(response.data, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {     
      console.error('Error response:', error.response); // Log the entire error response
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        toast.error(error.response.data, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    }
   }

   const [formtPassData, sethandletPassChange] = useState({ 
    id: id,
    old_tpassowrd: '',
    new_tpassword: '',
    confirm_tpassword: '',
  });
 
 
  const handletPassChange = (event) => {
    sethandletPassChange({
      ...formtPassData,
      [event.target.name]: event.target.value,
    });
  };
  const handletPassSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/profile_tpassword_update', formtPassData);
   
      sethandletPassChange({
        old_tpassowrd: '',
        new_tpassword: '',
        confirm_tpassword: '',
      });

      toast.success(response.data, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

    } catch (error) {     
      console.error('Error response:', error.response); // Log the entire error response
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        toast.error(error.response.data, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    }
  }
  

   
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
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
       setisButtonDisabled(false);

       history.push('/withdraw');
    } catch (error) {     
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          } else {
            toast.error('An error occurred', {  // Fallback message if the error doesn't have a specific message
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          }
        setisButtonDisabled(false);
    }
   }



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
      countryFetch();
  }, []);

  const [countries, setCountryData] = useState([]);  
    
  const countryFetch = async () => {
     setIsLoading(true);
     try {
         const response = await axios.get(`/api/commonData/country_list`);         
         const country  = response.data;
         setCountryData(country);        
         setIsLoading(false);
     } catch (error) {
         setError(error.message);
         setIsLoading(false);
     }
  };

  
  const profileUpdate = (() => {
    if (isLoading) {
      return <LoadingSpinner />;
    } else if (user) {
      return (
                <>
                  <div className="varification">
                        <div className="varification-head">
                            <h4>Profile Verification </h4>                           
                        </div>
                        <form onSubmit={handleSubmit}>
                            <span className="title">Personal Information</span>                        
                            <div className="row mb-4 g-3">
                                <div className="col-xxl-5 col-xl-4">
                                   <label>First Name</label>
                                    <div className="form-grp">
                                        <input type="text" placeholder="First Name" name='first_name'  value={formData.first_name}  onChange={handleInputChange} />
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                <div className="col-xxl-5 col-xl-4">
                                <label>Last Name</label>
                                    <div className="form-grp">
                                        <input type="text" placeholder="Last Name" name='last_name'  value={formData.last_name} onChange={handleInputChange} />
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-4">
                                   <label>Date Of Birth</label>
                                    <div className="form-grp">
                                    <i className="fas fa-calender"></i>
                                    <DatePicker
                                    placeholderText='Enter Date of Birth'
                                    name='dob'
                                    disabledKeyboardNavigation
                                    showIcon
                                    dateFormat="dd/MM/yyyy"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)} // Update startDate when the user selects a new date
                                />

                                    </div>
                                </div>
                            </div>
                         
                         
                            <span className="title">Full Address</span>
                            <div className="row g-3">
                            <div className="col-lg-6">
                            <label>Email</label>
                                <div className="form-grp form-grp-two">
                                    <input type="email" placeholder="Enter Your Email Address" name='email' value={formData.email} onChange={handleInputChange} />
                                    <i className="fas fa-thumbtack"></i>
                                </div>
                            </div>
                            <div className="col-lg-6">
                            <label>Mobile</label>
                                <div className="form-grp form-grp-two">
                                    <input type="text" placeholder="Enter Your Mobile No." name='mobile' value={formData.mobile} onChange={handleInputChange} />
                                    <i className="fas fa-thumbtack"></i>
                                </div>
                            </div>
                            <div className="col-lg-6">
                            <label>Address</label>
                                <div className="form-grp form-grp-two">
                                    <input type="text" placeholder="Address" name='address' value={formData.address} onChange={handleInputChange}/>
                                    <i className="fas fa-thumbtack"></i>
                                </div>
                            </div>
                          
                            <div className="col-lg-6">
                            <label>Zip</label>
                                <div className="form-grp form-grp-two">
                                    <input type="text" placeholder="ZIP / Postal Code" name='zip' value={formData.zip} onChange={handleInputChange} />
                                    <i className="fas fa-thumbtack"></i>
                                </div>
                            </div>
                            <div className="col-lg-6">
                            <label>City</label>
                                <div className="form-grp form-grp-two">
                                    <input type="text" placeholder="City" name='city' value={formData.city} onChange={handleInputChange} />
                                    <i className="fas fa-thumbtack"></i>
                                </div>
                            </div>
                            <div className="col-lg-6">
                              <label>State</label>
                                <div className="form-grp form-grp-two">
                                    <input type="text" placeholder="State or Province" name='state' value={formData.state} onChange={handleInputChange} />
                                    <i className="fas fa-thumbtack"></i>
                                </div>
                            </div>
                           
                            <div className="col-lg-6">
                                <div className="date-wrap">
                                    <div className="items items2 w-100">
                                        <select  className="input-field no-nice-select"  name="country_currency" id="country_currency" value={formData.country_currency}  onChange={handleInputChange} required >
                                           <option value="">Select Currency</option>
                                            {countries.map((country, index) => (
                                                <option key={index} value={country.currency}>
                                                {country.currency}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="date-wrap">
                                    <div className="items items2 w-100">
                                        <select  className="input-field no-nice-select" name="country" id="country" value={formData.country}  onChange={handleInputChange} required >
                                           <option value="">Select Country</option>
                                            {countries.map((country, index) => (
                                                <option key={index} value={country.name}>
                                                {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-12">
                                <div className="form-grp form-label">
                                    <label className="form-check-label d-flex align-items-center" for="coun">
                                        <input className="form-check-input" type="checkbox" required value="" id="coun"  />
                                        I am agree with all terms & Condition.
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-12" align="right">
                                <div className="form-grp">
                                    <button type="submit" className="cmn--btn">
                                        <span>Update Profile</span>
                                    </button>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </>
      );
    } else {
      return <div></div>;
    }
  })();

  const [BalancceReceived, setBalancceReceived] = useState([]);
  const [isLoadingReport, setIsLoadingReport] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/users/getUserBalanceData/${user_id}`);
      setBalancceReceived(response.data);
      setIsLoadingReport(false);
    } catch (error) {
      setError(error.message);
      setIsLoadingReport(false);
    }
  };


  const passwordUpdate = (() => {
    if (isLoading) {
      return <LoadingSpinner />;
    } else if (user) {
      return (
                <>
                  <div className="varification">
                       
                        <form onSubmit={handlePassSubmit}>
                          <h5>Password Update </h5>            
                            <div className="row mb-4 g-3">
                                <div className="col-xxl-3 col-xl-3">
                                    <div className="form-grp">
                                        <input type="password" placeholder="Enter Old Password" name='old_passowrd'  value={formPassData.old_passowrd}  onChange={handlePassChange} />
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3">
                                    <div className="form-grp">
                                        <input type="password" placeholder="Enter New Password" name='new_password'  value={formPassData.new_password} onChange={handlePassChange} />
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                
                                <div className="col-xxl-3 col-xl-3">
                                    <div className="form-grp">
                                        <input type="password" placeholder="Enter Confirm Password" name='confirm_password'  value={formPassData.confirm_password} onChange={handlePassChange} />
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3">
                                    <button type="submit" className="cmn--btn">
                                        <span>Update Password</span>
                                    </button>
                                </div>
                            </div>
                        </form>

                        <form onSubmit={handletPassSubmit}>
                           <h5>Transaction Password Update </h5>      
                            <div className="row mb-4 g-3">
                            <div className="col-xxl-3 col-xl-3">
                                <div className="form-grp">
                                        <input type="password" placeholder="Enter Old Password" name='old_tpassowrd'  value={formtPassData.old_tpassowrd}  onChange={handletPassChange} />
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3">
                                    <div className="form-grp">
                                        <input type="password" placeholder="Enter New Password" name='new_tpassword'  value={formtPassData.new_tpassword} onChange={handletPassChange} />
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                
                                <div className="col-xxl-3 col-xl-3">
                                    <div className="form-grp">
                                        <input type="password" placeholder="Enter Confirm Password" name='confirm_tpassword'  value={formtPassData.confirm_tpassword} onChange={handletPassChange} />
                                        <i className="fas fa-user"></i>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3">
                                    <button type="submit" className="cmn--btn">
                                        <span>Update Password</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </>
      );
    } else {
      return <div></div>;
    }
  })();


  return ( 
    <div>
          <ToastContainer style={{ zIndex: 999999999 }}  />
            <div class="breadcumnd-banner">
            <div class="container">
                <div class="breadcumd-content">
                <h1>
                    Profile 
                </h1>
                <ul class="bread-tag">
                    <li>
                        <Link className="logo" to={'/'}>Home</Link>
                    </li>
                    <li>
                        <i class="fas fa-arrow-right"></i>
                    </li>
                    <li>
                        Profile 
                    </li>
                </ul>
                </div>
            </div>
        </div>
         <div className="profile-section pb-20">
            <div className="container">
                <div className="profile-tab">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link link-secondary active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile1" href="#"><span>Profile</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-secondary" id="profile-tab01" data-bs-toggle="tab" data-bs-target="#profile2" href="#"><span>Settings</span></a>
                    </li>                 
                    <li className="nav-item">
                        <a className="nav-link link-secondary" id="profile-tab03" data-bs-toggle="tab" data-bs-target="#profile4" href="#"><span>Wallet</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-secondary" id="profile-tab04" data-bs-toggle="tab" data-bs-target="#profile5" href="#"><span>Verification</span></a>
                    </li>
                   
                    </ul>   
                </div>
                <div className="tab-content pt-20" id="pro-wrap">
                <div className="tab-pane fade show active" id="profile1" role="tabpanel">
                    <div className="row">
                        <div className="">
                            <div className="profile-left-wrap">
                                <div className="accounts-box">
                                    { userContent }
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="tab-pane fade" id="profile2" role="tabpanel">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="setting-wrap">
                            <div className="setting-box">
                                
                                 { passwordUpdate }
                            </div>                           
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="tab-pane fade" id="profile4" role="tabpanel">
                    <div className="row justify-content-between">
                        <h3 className="wallet-title">
                            Wallet
                        </h3>
                        <div className="wallet-tab-wrap">
                            <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link link-secondary active" id="wallet-tab" data-bs-toggle="tab" data-bs-target="#wallet1" href="#"><span>Deposit</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link link-secondary" id="wallet-tab01" data-bs-toggle="tab" data-bs-target="#wallet2" href="#"><span>Withdraw</span></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link link-secondary" id="wallet-tab03" data-bs-toggle="tab" data-bs-target="#wallet3" href="#"><span>Transactions</span></a>
                                </li>
                            </ul>
                            {/* <div className="gift-card">
                            <a href="#0" className="left-cart">
                                <span><img src="assets/img/table/details/gitft.png" alt="img" /></span>
                                <span>Redeem Gift Card</span>
                            </a>
                            <a href="#0" className="cmn--btn">
                                <span>
                                    Claim
                                </span>
                            </a>
                            </div>  */}
                        </div>
                        <div className="tab-content" id="wall-wrap">
                            <div className="tab-pane fade show active" id="wallet1" role="tabpanel">
                            <div className="currency-wrap">
                                <h5 className="currency-title">
                                    Deposit
                                </h5>
                                
                                <div className="row mb-4 g-3">
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#0" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/bkas.png"  style={{ maxHeight: '45px' }}  alt="icon" />
                                            </span>
                                            <span>bKash Deposit</span>
                                        </a>
                                        <a href="#0">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#0" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/nagad.webp"  style={{ maxHeight: '42px' }}  alt="icon" />
                                            </span>
                                            <span>Nagad Deposit</span>
                                        </a>
                                        <a href="#0">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#0" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/rocket.svg"  style={{ maxHeight: '45px' }}  alt="icon" />
                                            </span>
                                            <span>Rocket Deposit</span>
                                        </a>
                                        <a href="#0">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                     <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#0" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/upay.svg"  style={{ maxHeight: '45px' }}  alt="icon" />
                                            </span>
                                            <span>uPay Deposit</span>
                                        </a>
                                        <a href="#0">
                                            <span></span>
                                        </a>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#0" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/bitcoin.png" alt="icon" />
                                            </span>
                                            <span>Bitcoin</span>
                                        </a>
                                        <a href="#0">
                                            <span> 1 BTC = $19565.46</span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#0" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/ethereum.png" alt="icon" />
                                            </span>
                                            <span>Ethereum</span>
                                        </a>
                                        <a href="#0">
                                            <span> 1 ETH = $1343.21</span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#0" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/thether.png" alt="icon" />
                                            </span>
                                            <span>TETHER</span>
                                        </a>
                                        <a href="#0">
                                            <span> 1 USDT = $1.00
                                        </span>
                                        </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="bitcoin-item">
                                        <a href="#0" className="icon-wrap">
                                            <span className="icon">
                                                <img src="assets/img/table/details/litecoin.png" alt="icon" />
                                            </span>
                                            <span>Litecoin</span>
                                        </a>
                                        <a href="#0">
                                            <span> 1 LTC = $53.76</span>
                                        </a>
                                        </div>
                                    </div>
                                </div>

                             

                                        <div className="profile-section pb-20">
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
                                                                
                                                                <a style={{ backgroundColor: '#ff000000'}} href={`https://t.me/+${item.personal_mobile}`} target='_blank'>
                                                                <img style={{ maxHeight: '50px' }} src='https://cdn-icons-png.flaticon.com/512/5968/5968804.png' alt="Telegram Icon" />
                                                                </a>
                                                            </td>                                           
                                                           
                                                        </tr>       
                                                    ))}
                                                </tbody>
                                            </table>
                                        
                                          

                                       </div>                                            
                                    </div>

                            </div>
                            </div>
                            

                            <div className="tab-pane fade" id="wallet2" role="tabpanel">
                                      <div className="currency-wrap">
                                                
                                        <div className="row mb-4 g-3">
                                        <div className="varification">
                                            <div className="varification-head">
                                                <h4>Balance Withdraw  </h4>                           
                                            </div>
                                            <form onSubmit={handleWithdraw}>
                                        
                                            <div className="row g-3">
                                            
                                                <div className="col-lg-6">
                                                    <div className="form-grp form-grp-two">
                                                        <input type="text" placeholder="Enter Amount" name='amount' value={withdrawFormData.amount} onChange={handleWithdrawInputChange}/>
                                                        <i className="fas fa-usd"></i>
                                                    </div>
                                                </div>
                                            
                                             
                                                <div className="col-lg-6">
                                                    <div className="form-grp form-grp-two">
                                                    
                                                        <input type="password" placeholder="Enter Transaction Password" name='security_pin' value={withdrawFormData.security_pin} onChange={handleWithdrawInputChange}/>
                                                        <i className="fas fa-key"></i>
                                                    </div>
                                                    <label style={{color:'red'}}>*Default Transaction Password, is login password, change from settings </label>
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


                            
                            <div className="tab-pane fade" id="wallet3" role="tabpanel">
                            <div className="description-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>SL</th>
                                            <th>Amount $</th>
                                            <th>Agent</th>
                                            <th>Date</th>
                                            <th>Status</th>                                      
                                        </tr>
                                     

                                          {BalancceReceived.map((item,index) => (
                                            <tr className="tb1"  key={item.id}>
                                                <td>
                                                    <span className="text1">{index+1}</span>
                                                </td>
                                                <td>
                                                    {item.amount}
                                                </td>
                                                <td>
                                                    {item.s_key}
                                                </td>
                                                <td>
                                                    {item.createdAt}
                                                </td>
                                                <td>
                                                    <span className="text1">Paid</span>
                                                </td>
                                            </tr>       
                                        ))}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile5" role="tabpanel">
                   { profileUpdate } 
                    <div className="row justify-content-between">

                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
)



};

export default Profile;
