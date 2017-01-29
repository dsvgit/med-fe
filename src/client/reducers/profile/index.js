import {
  PROFILE_EDITOR_FETCH_PROFILE,
  PROFILE_EDITOR_FETCH_PROFILE_SUCCEED,
  PROFILE_EDITOR_FETCH_PROFILE_FAILED,
  PROFILE_EDITOR_SAVE_PROFILE,
  PROFILE_EDITOR_SAVE_PROFILE_SUCCEED,
  PROFILE_EDITOR_SAVE_PROFILE_FAILED,
  PROFILE_EDITOR_CHANGE_FIELD,
  PROFILE_EDITOR_CHANGE_TAB,
  PROFILE_EDITOR_RESET,
  PROFILE_EDITOR_VALIDATE
} from 'src/client/actionTypes/profile';

export default function (state, action) {
  let defaultState = {
    user: {
      id: '',
      login: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    errors: {},
    fetchError: false,
    fetchPending: false,
    savePending: false
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  switch (action.type) {
    case PROFILE_EDITOR_FETCH_PROFILE:
      return {
        ...state,
        fetchError: false,
        fetchPending: true
      };
    case PROFILE_EDITOR_FETCH_PROFILE_SUCCEED:
      let {
        user: {
          _id : id,
          login,
          firstname,
          lastname,
          email,
          password
          }
        } = action;
      return {
        ...state,
        user: {
          id,
          login,
          firstname,
          lastname,
          email,
          password
        },
        fetchError: false,
        fetchPending: false
      };
    case PROFILE_EDITOR_FETCH_PROFILE_FAILED:
      return {
        ...state,
        fetchError: true,
        fetchPending: false
      };
    case PROFILE_EDITOR_CHANGE_FIELD:
      let { name, value, context } = action;
      return {
        ...state,
        [context]: {
          ...state[context],
          [name]: value
        }
      };
    case PROFILE_EDITOR_VALIDATE:
      let { errors } = action;
      return {
        ...state,
        errors
      };
    case PROFILE_EDITOR_SAVE_PROFILE:
      return {
        ...state,
        savePending: true
      };
    case PROFILE_EDITOR_SAVE_PROFILE_SUCCEED:
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
    case PROFILE_EDITOR_SAVE_PROFILE_FAILED:
      return {
        ...state,
        savePending: false
      };
    case PROFILE_EDITOR_RESET:
      return defaultState;
    default:
      return state;
  }
}
