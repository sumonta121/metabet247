
import React, { useEffect,useState } from 'react';
import Loader from './include/loader';
import Nav from './include/nav';
import Footer from './include/footer';
import Slide from './include/slide';
import Leftmenu from './include/leftmenu';
import Rightmenu from './include/rightmenu';
import Signup from './include/signup';
import Signin from './include/signin';
import Betbalance from './include/betbalance.js';
import MainContent from './include/maincontent.js';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const Index = () => {
  
  const token = localStorage.getItem('jwtToken');
  const decodedToken = token ? jwt_decode(token) : null;
  const email = decodedToken ? decodedToken.email : null;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.async = true;
    document.head.appendChild(script);
  }, []); 

  
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
   <Nav  />
   <div className="main-body">
     <Leftmenu />
     <div className="body-middle">
         <Slide />
         <MainContent />       
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

export default Index