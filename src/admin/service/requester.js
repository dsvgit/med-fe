import Axios from 'axios';
import store from 'src/admin/service/store';
import { logout } from 'src/admin/modules/login/actions/loginPageActions';

const requester = Axios.create({
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.getItem('authToken')
  }
});

requester.interceptors.response.use(null, function(error) {
  if (error.response.status === 401) {
    store.dispatch(logout());
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export default requester;

const username = 'jIJUeW0Q4kKE2aDZ9O4KPVWZxeiCDOzArsaAZLm3';
const password = '4iUHj19lmmuoVEnkc8gLsUHpknhn7UNKQd5WJ0XtkF0fKARBgUq8WxXQUaqvrCJSanLmlRRMbq2NmGKrQmDK3RSjt618nUU5nYk8qQFWHtvSGrlFm1D7hMu8D6uEOGMG';

export const tokenRequester = Axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(`${username}:${password}`)
  }
});
