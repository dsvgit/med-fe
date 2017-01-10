import {
  LOGIN_LOG_IN,
  LOGIN_LOG_IN_SUCCEED,
  LOGIN_LOG_IN_FAILED,
  LOGIN_CHANGE_FIELD,
  LOGIN_RESET
} from 'src/login/actionTypes/login';

export default function (state, action) {
  const defaultState = {
    login: '',
    password: '',
    error: false,
    pending: false
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  switch (action.type) {
    case LOGIN_LOG_IN:
      return {
        ...state,
        error: false,
        pending: true
      };
    case LOGIN_LOG_IN_SUCCEED:
      return {
        ...state,
        error: false,
        pending: false
      };
    case LOGIN_LOG_IN_FAILED:
      return {
        ...state,
        error: true,
        pending: false
      };
    case LOGIN_CHANGE_FIELD:
      let { name, value } = action;
      return {
        ...state,
        [name]: value
      };
    case LOGIN_RESET:
      return defaultState;
    default:
      return state;
  }
}
