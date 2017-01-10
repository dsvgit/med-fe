import _ from 'lodash';

import app from 'src/admin/reducers/app';
import usersEditor from 'src/admin/reducers/users/editor';
import usersList from 'src/admin/reducers/users/list';


export default (state = {}, action) => {
  return {
    app: app(_.get(state, 'app'), action),
    users: {
      editor: usersEditor(_.get(state, 'users.editor'), action),
      list: usersList(_.get(state, 'users.list'), action)
    }
  };
}
