import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import {fetchUser} from './util/session_api_util'
import axios from 'axios';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  // axios.defaults.baseURL = 'http://localhost:5000';
  axios.defaults.baseURL = 'https://metabet247.onrender.com';

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {

    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);
     
    // Create a preconfigured state we can immediately add to our store
    const preloadedState = { session: { isAuthenticated: true, 
      user: {
        id: decodedUser._id,
        usAutoId: decodedUser.usAutoId,
        handle: decodedUser.handle,
        email: decodedUser.email,
        user_id: decodedUser.usAutoId,
        role_as: decodedUser.role_as,
        mobile: decodedUser.mobile,
      }}};

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000; 

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      // window.location.href = '/login';
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }

  // Render our root component and pass in the store as a prop
  const root = document.getElementById('root');

  window.store = store;
  window.fetchUser = fetchUser;
 

  ReactDOM.render(<Root store={store} />, root);
});
  