import history from 'src/login/services/history';
import config from 'src/common/services/config';

export default {
  to: {
    app() {
      window.location.replace(config.subAppUrl);
    }
  }
}
