import {
  USERS_LIST_FETCH_USERS,
  USERS_LIST_FETCH_USERS_SUCCEED,
  USERS_LIST_FETCH_USERS_FAILED,
  USERS_LIST_SELECT_USER,
  USERS_LIST_RESET
} from 'src/admin/actionTypes/users/list';


export default function (state, action) {
  let defaultState = {
    users: [],
    fetchError: false,
    fetchPending: false,
    selected: []
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  switch (action.type) {
    case USERS_LIST_FETCH_USERS:
      return {
        ...state,
        fetchError: false,
        fetchPending: true
      };
    case USERS_LIST_FETCH_USERS_SUCCEED:
      let { users } = action;
      return {
        ...state,
        users,
        fetchError: false,
        fetchPending: false
      };
    case USERS_LIST_FETCH_USERS_FAILED:
      return {
        ...state,
        fetchError: true,
        fetchPending: false
      };
    case USERS_LIST_SELECT_USER:
      let { selected } = action;
      return {
        ...state,
        selected
      };
    case USERS_LIST_RESET:
      return defaultState;
    default:
      return state;
  }
}
