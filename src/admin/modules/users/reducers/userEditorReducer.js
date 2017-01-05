import {
  FETCH_USER,
  UPDATE_USER,
  RESET_USER,
  CHANGE_USER_NAME,
  CHANGE_USER_EMAIL,
  CHANGE_USER_PASSWORD,
  CHANGE_USER_IS_ADMIN
} from '../constants/userEditorConstants';

export default function (state, action) {
  if (typeof state === 'undefined' || action.type === RESET_USER) {
    state = {};
  }

  if (action.type === UPDATE_USER) {
    return action.user;
  }
  else if (action.type === CHANGE_USER_NAME) {
    return {
      ...state,
      username: action.username
    };
  }
  else if (action.type === CHANGE_USER_EMAIL) {
    return {
      ...state,
      email: action.email
    };
  }
  else if (action.type === CHANGE_USER_PASSWORD) {
    return {
      ...state,
      password: action.password
    };
  }
  else if (action.type === CHANGE_USER_IS_ADMIN) {
    return {
      ...state,
      isAdmin: action.isAdmin
    };
  }
  else {
    return state;
  }
}
