import React, { useEffect,useState } from 'react';
import { Link} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axios from 'axios';

const Footer = () => {
  
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
    <footer className="footer-section">
        <div className="container">
        <div className="footer-wrapper">
            <p>Copyright 2023 <Link to="#"  >{basicInfoshow.site_title} </Link> All Rights Reserved.</p>
            <ul className="footer-link">
                <li>
                    <Link to="#">
                      Cloudbased Program
                   </Link>
                </li>
                <li>
                    <Link to="#">
                    Terms & conditions
                   </Link>
                </li>
                <li>
                    <Link to="#">
                     Privacy Policy
                   </Link>
                </li>
            </ul>
        </div>
        </div>
    </footer>
  )
}

export default Footer