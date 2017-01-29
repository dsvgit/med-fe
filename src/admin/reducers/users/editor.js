import {
  USERS_EDITOR_FETCH_USER,
  USERS_EDITOR_FETCH_USER_SUCCEED,
  USERS_EDITOR_FETCH_USER_FAILED,
  USERS_EDITOR_SAVE_USER,
  USERS_EDITOR_SAVE_USER_SUCCEED,
  USERS_EDITOR_SAVE_USER_FAILED,
  USERS_EDITOR_CHANGE_FIELD,
  USERS_EDITOR_CHANGE_TAB,
  USERS_EDITOR_RESET,
  USERS_EDITOR_VALIDATE,
  USERS_EDITOR_GENERATE_PASSOWRD
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
    generatedPassword: '',
    errors: {},
    activeTab: 'profile',
    fetchError: false,
    fetchPending: false,
    savePending: false
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
        },
        generatedPassword: ''
      };
    case USERS_EDITOR_VALIDATE:
      let { errors } = action;
      return {
        ...state,
        errors
      };
    case USERS_EDITOR_CHANGE_TAB:
      let { tab: activeTab } = action;
      return {
        ...state,
        activeTab
      };
    case USERS_EDITOR_SAVE_USER:
      return {
        ...state,
        savePending: true
      };
    case USERS_EDITOR_SAVE_USER_SUCCEED:
      return {
        ...state,
        user: {
          ...action.user,
          password: '',
          id: action.user._id
        },
        savePending: false
      };
      return state;
    case USERS_EDITOR_SAVE_USER_FAILED:
      return {
        ...state,
        savePending: false
      };
    case USERS_EDITOR_GENERATE_PASSOWRD:
      let { generatedPassword } = action;
      return {
        ...state,
        generatedPassword,
        user: {
          ...state.user,
          password: generatedPassword
        }
      };
    case USERS_EDITOR_RESET:
      return defaultState;
    default:
      return state;
  }
}
