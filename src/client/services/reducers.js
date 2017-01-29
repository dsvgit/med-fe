import _ from 'lodash';

import app from 'src/client/reducers/app';
import foodsList from 'src/client/reducers/foods/list';
import foodsEditor from 'src/client/reducers/foods/editor';


export default (state = {}, action) => {
  return {
    app: app(_.get(state, 'app'), action),
    foods: {
      editor: foodsEditor(_.get(state, 'foods.editor'), action),
      list: foodsList(_.get(state, 'foods.list'), action)
    }
  };
}
