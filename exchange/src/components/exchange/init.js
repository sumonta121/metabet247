import React, { useEffect, useState, useRef } from "react";
import {Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import apiConfig from '../apiConfig';

const Init = () => {

  const { usAutoId } = useParams(); 
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [gameLink, setGameLink] = useState(null);


  useEffect(() => {
    const fetchGame = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${apiConfig.baseURL}/api/exchange/api/v1/initGame/${usAutoId}`);
      ///  const allDatas = response.json();
        setGameLink(response.data.url);
        console.log('received data' + response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGame();
  }, [usAutoId]);


  return (
    <>   
     
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <div className="basic-form">
             <iframe  src={gameLink} width="100%" height="800" title="Embedded Content" />
            </div>
        )}
   
    </>
  );
};

export default Init;
