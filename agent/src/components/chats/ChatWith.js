import React, { Component, useEffect, useState } from "react";
import { useParams,Link } from 'react-router-dom';
import Navbar from "../frontend/backend/navbar.js";
import Footer from "../frontend/backend/footer.js";
import Chatbox from "../frontend/backend/chatbox.js";
import HeaderRight from "../frontend/backend/header_right.js";
import LeftSidebar from "../frontend/backend/leftSidebar.js";
import jwt_decode from "jwt-decode";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import chat_css from "./chat_style.css";
import apiConfig from '../apiConfig';
import axios from 'axios';
import Pusher from 'pusher-js';

const ChatWith = () => {

  const token        = localStorage.getItem("jwtToken");
  const decodedToken = jwt_decode(token);
  const userInfo     = decodedToken;
  const senderid     = userInfo.user_id;
  const role_as      = userInfo.role_as;

    const { userId } = useParams();

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [receiverInfo, setReceiverInfo] = useState({});

    useEffect(() => {
        const pusher = new Pusher('263926cec81537c7c913', {
            cluster: 'ap2',
        });
        const channel = pusher.subscribe('public');
        channel.bind('chat', async function (data) {
          try {
              const response = await axios.post(`${apiConfig.baseURL}/api/broadcast/receive`, {
                  message: data.message,  senderid: data.senderid, receiverid: data.receiverid,
              });
                
                // console.log(sentMessage.receiverid);      
                // console.log(sentMessage.senderid);      
                // console.log(senderid);      
                // console.log(data.senderid);      
                // console.log(userId);  

              const sentMessage = response.data.data; // Extract sent message data
              if (sentMessage.receiverid === senderid) {     
                    if (data.senderid === userId) {     
                        setMessages(prevMessages => [...prevMessages, sentMessage]);
                        setMessageInput('');
                        window.scrollTo(0, document.body.scrollHeight);
                    }
              }
          } catch (error) {
              console.error('Error:', error);
          }
      });

    
      const fetchChatMessages = async () => {
        try {
            const response = await axios.post(`${apiConfig.baseURL}/api/broadcast/chats`, {
                senderid: senderid, receiverid: userId,
            });
            setMessages(response.data.chatMessages);
            setReceiverInfo(response.data.receiverInfo);        
        } catch (error) {
            console.error('Error fetching chat messages:', error);
        }
      };
      fetchChatMessages();
        return () => {
            channel.unbind('chat');
            pusher.unsubscribe('public');
        };
    }, [userId]);

      
      const handleSubmit = async (e) => {
        e.preventDefault();
        const pusher = new Pusher('263926cec81537c7c913', {
            cluster: 'ap2',
        });
    
        try {
            const response = await axios.post(
                `${apiConfig.baseURL}/api/broadcast/broadcast`,
                {
                    message: messageInput, senderid: senderid, receiverid: userId,
                },
                {
                    headers: {
                        'X-Socket-Id': pusher.connection.socket_id,
                    },
                }
            );

            // Extract sent message data
            const sentMessage = response.data.data;                      
            // Check if the sent message's senderid is equal to the current user's id
            if (sentMessage.senderid === senderid) {
                // If the sent message is not from the current user, add it to the state
                setMessages(prevMessages => [...prevMessages, sentMessage]);
                setMessageInput('');
                window.scrollTo(0, document.body.scrollHeight);
            } else {
                 // If the sent message is from the current user, do not add it to the state again
                 setMessageInput('');
                 window.scrollTo(0, document.body.scrollHeight);
            }
    
        } catch (error) {
            console.error('Error:', error);
        }
    };

   
    const formatTimestamp = (timestamp) => {
        let date;
        if (timestamp !== undefined && timestamp !== null) {
            date = new Date(timestamp);
        } else {
            date = new Date(); // Set to current time if timestamp is undefined or null
        }
    
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
    
        const formattedTime = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        }).toLowerCase();
    
        if (date.toDateString() === today.toDateString()) {
            return formattedTime;
        } else if (date.toDateString() === yesterday.toDateString()) {
            return `${formattedTime} Yesterday`;
        } else {
            const diffInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
            if (diffInDays === 1) {
                return `${formattedTime} Yesterday`;
            } else if (diffInDays <= 7) {
                return `${formattedTime} ${diffInDays} days ago`;
            } else {
                const formattedDate = date.toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: '2-digit'
                }).replace(/\//g, '.');
                return `${formattedTime} ${formattedDate}`;
            }
        }
    };

    return (
        <>
          <div id="main-wrapper">
            <Navbar />
            <HeaderRight />
            <LeftSidebar />
            <div className="content-body" style={{ paddingTop: '0px' }}>
                <div className="container-fluid">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Chat With {receiverInfo.user_id} </h4>
                            </div>
                            <div className="card-body">

                                <div className="chat">
                                 
                                    <div className="messages">
                                    {messages.map((message, index) => (
                                            message.senderid === senderid ? (
                                                <div key={index} className="message right">
                                                    <img src="https://cdn-icons-png.flaticon.com/32/3135/3135715.png" alt="Avatar" />
                                                    <p>{message.message}</p>
                                                    <br/>
                                                    <small>{formatTimestamp(message.createdAt)}</small>
                                                </div>
                                            ) : (
                                                <div key={index} className="message left">
                                                    <img src="https://cdn-icons-png.flaticon.com/32/1999/1999625.png" alt="Avatar" />
                                                    <p>{message.message}</p>
                                                    <br/>
                                                    <small>{formatTimestamp(message.createdAt)}</small>
                                                </div>
                                            )
                                        ))}

                                    </div>
                                    <div className="bottom">
                                        <form onSubmit={handleSubmit}>
                                            <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} id="message" name="message" placeholder="Enter message..." autoComplete="off" />
                                            <button type="submit"></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
          </div>
        </>
    );
};

export default ChatWith;
