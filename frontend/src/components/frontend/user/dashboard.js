import React, { useEffect,useState } from 'react';
import Loader from '../include/loader';
import Nav from '../include/nav';
import Footer from '../include/footer';
import Slide from '../include/slide';
import Leftmenu from '../user/include/leftmenu';
import Rightmenu from '../include/rightmenu';
import Signup from '../include/signup';
import Signin from '../include/signin';
import Betbalance from '../include/betbalance.js';
import Profile from '../user/profile.js';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const Dashboard = () => {

  const token = localStorage.getItem('jwtToken');
  const decodedToken = jwt_decode(token);  
  const email = decodedToken.user_id;
  
  const [basicInfoshow, basic_Info_Data] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const basicInfoData = async () => {
    setIsLoading(true);
    try {
        const response = await axios.get(`/api/commonData/basicinfo`);
        const newData = response.data;
        basic_Info_Data(newData);
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    basicInfoData();   
  }, []);


  return (
    <div>      
      {/* <Loader /> */}
      <Nav   />
      <div className="main-body">
        <Leftmenu />
        <div className="body-middle">     
          <Profile email={email} /> {/* Pass the email value as a prop */}
          <Footer  basicInfoshow={basicInfoshow}  />          
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

export default Dashboard;
