import Axios from 'axios';

import store from 'src/admin/services/store';
import { logout as adminLogout } from 'src/admin/actions/app';
import { logout as clientLogout } from 'src/client/actions/app';
import appSettings from 'appSettings';


let logout = window.subApplication == 'admin' ? adminLogout : clientLogout;

// const

const clientId = appSettings.ClientId;
const clientSecret = appSettings.ClientSecret;


// instances

const apiV0 = Axios.create({
  baseURL: 'http://localhost:8000/api/v0/',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  }
});

apiV0.interceptors.request.use(config => {
  config.headers = Object.assign({
    ...config.headers,
    'Authorization': 'Bearer ' + sessionStorage.getItem('authToken')
  });

  return config;
});

apiV0.interceptors.response.use(null, error => {
  if (error.response.status === 401 || error.response.status === 403) {
    store.dispatch(logout());
    return Promise.reject(error);
  }
  return Promise.reject(error);
});


const oauth = Axios.create({
  baseURL: 'http://localhost:8000/o/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  auth: {
    username: clientId,
    password: clientSecret
  }
});

export default {
  apiV0,
  oauth
}
