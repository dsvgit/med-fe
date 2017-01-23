import {
  USERS_EDITOR_FETCH_USER,
  USERS_EDITOR_FETCH_USER_SUCCEED,
  USERS_EDITOR_FETCH_USER_FAILED,
  USERS_EDITOR_SAVE_USER,
  USERS_EDITOR_SAVE_USER_SUCCEED,
  USERS_EDITOR_SAVE_USER_FAILED,
  USERS_EDITOR_CHANGE_FIELD,
  USERS_EDITOR_RESET
} from 'src/admin/actionTypes/users/editor';

export default function (state, action) {
  let defaultState = {
    user: {
      id: '',
      login: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      isAdmin: false
    },
    card: {
      prot: 0,
      fats: 0,
      carb: 0,
      calories: 0
    },
    fetchError: false,
    fetchPending: false
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  switch (action.type) {
    case USERS_EDITOR_FETCH_USER:
      return {
        ...state,
        fetchError: false,
        fetchPending: true
      };
    case USERS_EDITOR_FETCH_USER_SUCCEED:
      let {
        user: {
          _id : id,
          login,
          firstname,
          lastname,
          email,
          password,
          isAdmin
          },
        card
        } = action;
      return {
        ...state,
        user: {
          id,
          login,
          firstname,
          lastname,
          email,
          password,
          isAdmin
        },
        card,
        fetchError: false,
        fetchPending: false
      };
    case USERS_EDITOR_FETCH_USER_FAILED:
      return {
        ...state,
        fetchError: true,
        fetchPending: false
      };
    case USERS_EDITOR_CHANGE_FIELD:
      let { name, value, context } = action;
      return {
        ...state,
        [context]: {
          ...state[context],
          [name]: value
        }
      };
    case USERS_EDITOR_SAVE_USER:
      return state;
    case USERS_EDITOR_SAVE_USER_SUCCEED:
      return state;
    case USERS_EDITOR_SAVE_USER_FAILED:
      return state;
    case USERS_EDITOR_RESET:
      return defaultState;
    default:
      return state;
  }
}
