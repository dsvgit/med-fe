import _ from 'lodash';

import app from 'src/admin/reducers/app';
import usersEditor from 'src/admin/reducers/users/editor';
import usersList from 'src/admin/reducers/users/list';
import foodsList from 'src/admin/reducers/foods/list';
import foodsEditor from 'src/admin/reducers/foods/editor';
import manage from 'src/admin/reducers/manage';
import statistics from 'src/admin/reducers/statistics';

export default (state = {}, action) => {
  return {
    app: app(_.get(state, 'app'), action),
    users: {
      editor: usersEditor(_.get(state, 'users.editor'), action),
      list: usersList(_.get(state, 'users.list'), action)
    },
    foods: {
      editor: foodsEditor(_.get(state, 'foods.editor'), action),
      list: foodsList(_.get(state, 'foods.list'), action)
    },
    manage: manage(_.get(state, 'manage'), action),
    statistics: statistics(_.get(state, 'statistics'), action)
  };
}
