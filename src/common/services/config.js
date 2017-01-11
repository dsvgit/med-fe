import adminConfig from 'src/admin/services/config';
import clientConfig from 'src/client/services/config';


function getConfig() {
  switch(window.subApplication){
    case 'admin':
      return adminConfig
    case 'client':
      return clientConfig
    default:
      return {};
  }
}

export default getConfig();
