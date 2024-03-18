import axios from 'axios';

// We've been using this method in previos steps
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};

export const fetchUser = userId => {
  return axios.get(`/api/users/show/${userId}`)
}

// agent create

export const agentCreate = (agent_data) => {
  return axios.post('/api/agent/agent_create', agent_data);
};


export const getdataAgent = () => {
  return axios.get(`/api/agent/getdataAgent`) 
}

export const getAgent = (agentId) => {
  return axios.get(`/api/agent/index/${agentId}`) 
}

export const deleteAgent= (agentId) => {
  return axios.delete(`api/agent/deleteAgent/${agentId}`)
}

export const editagent= (usAutoId) => {
  return axios.delete(`api/agent/editagent/${usAutoId}`)
}
export const updateagent= (usAutoId) => {
  return axios.delete(`api/agent/updateagent/${usAutoId}`)
}

export const BlFromAdmin= () => {
  return axios.get(`/api/agent/BlFromAdmin`)
}

export const ProfileManage= () => {
  return axios.get(`/api/users/ProfileManage/:user_id`) 
}

export const PasswordManage= () => {
  return axios.get(`/api/users/PasswordManage/:user_id`) 
}

export const TpinManage= () => {
  return axios.get(`/api/users/TpinManage/:user_id`) 
}







// last row
// export const lastRow = () => {
//   return axios.get(`/api/agent/last-row`) 
// }
