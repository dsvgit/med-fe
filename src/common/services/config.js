import adminConfig from 'src/admin/services/config';
import clientConfig from 'src/client/services/config';


function getSubConfig() {
  switch(window.subApplication){
    case 'admin':
      return adminConfig
    case 'client':
      return clientConfig
    default:
      return {};
  }
}

function getConfig() {
  let GlobalConfig = window.GlobalConfig || {};
  let subConfig = getSubConfig();
  let {
    subApplication
    } = window;

  let config = {
    ...GlobalConfig,
    ...subConfig,
    subApplication
  };

  return config;
}

export default getConfig();
