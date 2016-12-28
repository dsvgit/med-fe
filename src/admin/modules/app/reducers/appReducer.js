import { SET_APP_TITLE } from '../constants/appConstants';

export default (state, action) => {
  if (typeof state === 'undefined') {
    state = {
      title: ''
    };
  }

  if (action.type === SET_APP_TITLE) {
    let { title } = action;
    return {...state, title };
  }
  else {
    return state;
  }
}
