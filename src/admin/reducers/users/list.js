import {
  USERS_LIST_FETCH_USERS_REQUEST,
  USERS_LIST_FETCH_USERS_SUCCEED,
  USERS_LIST_FETCH_USERS_FAILED,
  USERS_LIST_SELECT_USER,
  USERS_LIST_RESET,
  USERS_LIST_NEXT_PAGE,
  USERS_LIST_PREV_PAGE
} from 'src/admin/actionTypes/users/list';


export default function (state, action) {
  let defaultState = {
    users: [],
    page: 1,
    total: 0,
    pageSize: 10,
    fetchError: false,
    fetchPending: false,
    selected: []
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  let { page } = state;

  switch (action.type) {
    case USERS_LIST_FETCH_USERS_REQUEST:
      return {
        ...state,
        fetchError: false,
        fetchPending: true
      };
    case USERS_LIST_FETCH_USERS_SUCCEED:
      let { users, total } = action;
      return {
        ...state,
        users,
        total,
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
    case USERS_LIST_NEXT_PAGE:
      let nextPage = page + 1;
      return {
        ...state,
        page: nextPage
      };
    case USERS_LIST_PREV_PAGE:
      let prevPage = page == 1 ? page : page - 1;
      return {
        ...state,
        page: prevPage
      };
    case USERS_LIST_RESET:
      return defaultState;
    default:
      return state;
  }
}
