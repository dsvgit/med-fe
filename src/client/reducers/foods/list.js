import {
  FOODS_LIST_FETCH_FOODS_REQUEST,
  FOODS_LIST_FETCH_FOODS_SUCCEED,
  FOODS_LIST_FETCH_FOODS_FAILED,
  FOODS_LIST_SELECT_FOOD,
  FOODS_LIST_RESET,
  FOODS_LIST_NEXT_PAGE,
  FOODS_LIST_PREV_PAGE,
  FOODS_LIST_CHANGE_FIELD
} from 'src/client/actionTypes/foods/list';


export default function (state, action) {
  let defaultState = {
    foods: [],
    page: 1,
    total: 0,
    pageSize: 10,
    search: '',
    fetchError: false,
    fetchPending: false,
    selected: []
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  let { page } = state;

  switch (action.type) {
    case FOODS_LIST_FETCH_FOODS_REQUEST:
      return {
        ...state,
        fetchError: false,
        fetchPending: true
      };
    case FOODS_LIST_FETCH_FOODS_SUCCEED:
      let { foods, total } = action;
      return {
        ...state,
        foods,
        total,
        fetchError: false,
        fetchPending: false
      };
    case FOODS_LIST_FETCH_FOODS_FAILED:
      return {
        ...state,
        fetchError: true,
        fetchPending: false
      };
    case FOODS_LIST_SELECT_FOOD:
      let { selected } = action;
      return {
        ...state,
        selected
      };
    case FOODS_LIST_NEXT_PAGE:
      let nextPage = page + 1;
      return {
        ...state,
        page: nextPage
      };
    case FOODS_LIST_PREV_PAGE:
      let prevPage = page == 1 ? page : page - 1;
      return {
        ...state,
        page: prevPage
      };
    case FOODS_LIST_CHANGE_FIELD:
      let { name, value } = action;
      return {
        ...state,
        [name]: value
      };
    case FOODS_LIST_RESET:
      return defaultState;
    default:
      return state;
  }
}
