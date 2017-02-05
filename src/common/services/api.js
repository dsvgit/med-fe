require('es6-promise').polyfill();
import Axios from 'axios';

import appSettings from 'appSettings';

let isAdmin = window.subApplication == 'admin';

// const

const clientId = appSettings.ClientId;
const clientSecret = appSettings.ClientSecret;


// instances

const apiV0 = Axios.create({
  baseURL: 'http://localhost:8080/api/v0/',
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Cache-control': 'no-cache',
    'Cache-control': 'no-store',
    'Pragma': 'no-cache',
    'Expires': 0
  }
});

apiV0.interceptors.request.use(config => {
  config.headers = Object.assign({
    ...config.headers,
    'x-access-token': sessionStorage.getItem('authToken')
  });

  return config;
});

let authParams = {};
if (isAdmin) {
  authParams.admin = true;
}

const oauth = Axios.create({
  baseURL: `http://localhost:8080/api/v0/authenticate`,
  params: authParams,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export default {
  apiV0,
  oauth
}
