import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import LoadingSpinner from "../user/include/LoadingSpinner";
import jwt_decode from 'jwt-decode';

const Rightmenu = ({ email }) => {
    const token = localStorage.getItem('jwtToken');
    const userInfo = token ? jwt_decode(token) : null;
    const userRole = userInfo ? userInfo.role_as : null;


    const user_id = userInfo ? userInfo.user_id : null;

    //   user balance show start
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        const fetchUser = async () => {
        try {
            const response = await axios.get(`/api/users/singleUserBalance/${user_id}`);
            setUser(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
        };

        fetchUser();
    }, [email]);

 
    //   user balance show end


  return (
    <>
    <div className="right-site-menu" style={{ paddingTop:'40px' }}>
       
        <div className="right-box">
         <div className="popular-bets">
            <img style={{ maxHeight:'220px', maxWidth:'290px'}} src='https://res.cloudinary.com/dadh2yt4v/image/upload/v1693746757/bbbb_ujuabl.jpg' />
        </div>
      
         <div className="popular-bets">
            <img style={{ maxHeight:'220px', maxWidth:'290px'}} src='https://res.cloudinary.com/dadh2yt4v/image/upload/v1693746757/10_bwcspx.jpg' />
        </div>
      
         <div className="popular-bets">
            <img style={{ maxHeight:'220px', maxWidth:'290px'}} src='https://res.cloudinary.com/dadh2yt4v/image/upload/v1693746757/aaaaaa_p3nhro.jpg' />
        </div>
      
         <div className="popular-bets">
            <img style={{ maxHeight:'220px', maxWidth:'290px'}} src='https://res.cloudinary.com/dadh2yt4v/image/upload/v1693746757/11_ii46tf.jpg' />
        </div>
      
         <div className="popular-bets">
            <img style={{ maxHeight:'220px', maxWidth:'290px'}} src='https://res.cloudinary.com/dadh2yt4v/image/upload/v1693732801/ads_3_vg21ye.jpg' />
        </div>
        <div className="popular-bets">
            <img style={{ maxHeight:'220px', maxWidth:'290px'}} src='https://res.cloudinary.com/dadh2yt4v/image/upload/v1693732800/ads_2_ec53fy.jpg' />
        </div>
        
        <div className="popular-bets">
            <img style={{ maxHeight:'220px', maxWidth:'290px'}} src='https://res.cloudinary.com/dadh2yt4v/image/upload/v1693742245/i8kq143pnzjial2gyzij.jpg' />
        </div>
   
        <div className="popular-bets">
            <img style={{ maxHeight:'220px', maxWidth:'290px'}} src='https://res.cloudinary.com/dadh2yt4v/image/upload/v1693732800/ads_1_x0rkcp.jpg' />
        </div>
   
        <div className="popular-bets">
            <img style={{ maxHeight:'220px', maxWidth:'290px'}} src='https://res.cloudinary.com/dadh2yt4v/image/upload/v1693732799/ads_4_ccitcf.jpg' />
        </div>
   
        </div>
    </div>
    </>
  )
}

export default Rightmenu