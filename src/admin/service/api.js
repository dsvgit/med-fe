import Axios from 'axios';

import store from 'src/admin/service/store';
import { logout } from 'src/admin/modules/login/actions/loginPageActions';


// const

const clientId = 'OeoUPAD0zcIHNcNJ9qSPVHsUT7xdVW2JdXZNVQbp';
const clientSecret = 'BErxBCjmqeMF5OpsjBlZ52GGkcI7h2duFBTGqQOR370ooeMN1cGR4HR17NEI54M0VIMTwYg2Gw8nvTyEk9OtFdxdPNjvk5gTgYmOAGAXLkFyGyVirWIG5Y4iS25VS2PD';


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
  if (error.response.status === 401) {
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
