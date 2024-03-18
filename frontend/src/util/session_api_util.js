import axios from 'axios';



// We've been using this method in previos steps
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

//axios.defaults.baseURL = 'https://xyz-games.onrender.com';

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
   return axios.post('/api/users/login', userData);

//   fetch('https://xyz-games.onrender.com/api/users/login', {
//     method: 'POST',
//     headers:{
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },    
//     body: new URLSearchParams({
//         'email': 'nazmul@gmail.com',
//         'password': '123456'
//     })
// });



  // const options = {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //   data: qs.stringify(data),
  //   url: 'https://xyz-games.onrender.com/api/users/login'
  // };
  // return axios(options)


  
 // return axios.post('https://xyz-games.onrender.com/api/users/login', userData);
};

export const fetchUser = userId => {
  return axios.get(`/api/users/show/${userId}`)
}