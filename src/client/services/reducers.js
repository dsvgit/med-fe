import _ from 'lodash';

import app from 'src/client/reducers/app';


export default (state = {}, action) => {
  return {
    app: app(_.get(state, 'app'), action)
  };
}
