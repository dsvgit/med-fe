import {
  APP_SET_TITLE,
  APP_SET_CURRENT_USER,
  APP_OPEN_SIDEBAR,
  APP_CLOSE_SIDEBAR
} from 'src/client/actionTypes/app';

export default (state, action) => {
  if (typeof state === 'undefined') {
    state = {
      title: '',
      currentUser: null,
      sidebarOpened: false
    };
  }

  switch (action.type) {
    case APP_SET_TITLE:
      let { title } = action;
      return {...state, title };
    case APP_SET_CURRENT_USER:
      let { currentUser } = action;
      return {...state, currentUser };
    case APP_OPEN_SIDEBAR:
      return {
        ...state,
        sidebarOpened: true
      };
    case APP_CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarOpened: false
      };
    default:
      return state;
  }
}
