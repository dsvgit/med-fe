import Axios from 'axios';

import store from 'src/admin/services/store';
import { logout as adminLogout } from 'src/admin/actions/app';
import { logout as clientLogout } from 'src/client/actions/app';
import appSettings from 'appSettings';


let logout = window.subApplication == 'admin' ? adminLogout : clientLogout;
let authPrefix = window.subApplication == 'admin' ? 'admin' : 'client';

// const

const clientId = appSettings.ClientId;
const clientSecret = appSettings.ClientSecret;


// instances

const apiV0 = Axios.create({
  baseURL: 'http://localhost:8080/api/v0/',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  }
});

apiV0.interceptors.request.use(config => {
  config.headers = Object.assign({
    ...config.headers,
    'x-access-token': sessionStorage.getItem('authToken')
  });

  return config;
});

apiV0.interceptors.response.use(null, error => {
  if (!error.response) return;

  if (error.response.status === 401 || error.response.status === 403) {
    store.dispatch(logout());
    return Promise.reject(error);
  }
  return Promise.reject(error);
});


const oauth = Axios.create({
  baseURL: `http://localhost:8080/api/v0/${authPrefix}/authenticate`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export default {
  apiV0,
  oauth
}
