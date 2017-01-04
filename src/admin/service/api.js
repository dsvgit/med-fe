const host = 'http://localhost:8000/api/v0/';
const tokenHost = 'http://localhost:8000/o/token/';


export default url => {
  return host + url;
}

export function getToken(url ='') {
  return tokenHost + url;
}
