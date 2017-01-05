import { SET_APP_TITLE, SET_CURRENT_USER } from '../constants/appConstants';

export default (state, action) => {
  if (typeof state === 'undefined') {
    state = {
      title: '',
      currentUser: null
    };
  }

  if (action.type === SET_APP_TITLE) {
    let { title } = action;
    return {...state, title };
  }
  else if (action.type === SET_CURRENT_USER) {
    let { currentUser } = action;
    return {...state, currentUser };
  }
  else {
    return state;
  }
}
