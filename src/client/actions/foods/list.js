import _ from 'lodash';

import { apiV0 } from 'src/common/services/api';
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


export function fetchFoods() {
  return (dispatch, getState) => {
    let state = _.get(getState(), 'foods.list');
    let params = _.pick(state, ['page', 'pageSize', 'search']);

    dispatch(fetchFoodsRequest());

    apiV0.get(`user-foods/`, { params })
    .then(response => {
      dispatch(fetchFoodsSucceed(response));
    })
    .catch(response => {
      dispatch(fetchFoodsFailed(response));
    });
  }
}

const fetchFoodsDebounced = _.debounce(dispatch => dispatch(fetchFoods()), 500);

function fetchFoodsRequest(payload) {
  return { type: FOODS_LIST_FETCH_FOODS_REQUEST };
}

function fetchFoodsSucceed(response) {
  let {
    foods,
    total
    } = response.data;
  return { type: FOODS_LIST_FETCH_FOODS_SUCCEED, foods, total };
}

function fetchFoodsFailed(response) {
  debugger;
  return { type: FOODS_LIST_FETCH_FOODS_FAILED };
}

export function deleteFoods(ids) {
  return (dispatch, getState) => {
    let selected = getState().foods.list.selected;
    let current = selected[0];
    if (!current) return;

    apiV0.delete(`user-food/${current}/`)
    .then(response => {
      dispatch(fetchFoods());
    })
    .catch(() => {
      debugger;
      console.log('deleteFoods failed');
    });
  }
}

export function foodsSelect(selected) {
  return { type: FOODS_LIST_SELECT_FOOD, selected };
}

export function reset() {
  return { type: FOODS_LIST_RESET };
}

export function getNextPageData() {
  return dispatch => {
    dispatch(nextPage());
    dispatch(fetchFoods());
  };
}

export function getPrevPageData() {
  return dispatch => {
    dispatch(prevPage());
    dispatch(fetchFoods());
  };
}

function nextPage() {
  return { type: FOODS_LIST_NEXT_PAGE };
}

function prevPage() {
  return { type: FOODS_LIST_PREV_PAGE };
}

export function changeField(payload) {
  return dispatch => {
    dispatch({ type: FOODS_LIST_CHANGE_FIELD, ...payload });
    fetchFoodsDebounced(dispatch);
  };
}
