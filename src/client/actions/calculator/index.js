import _ from 'lodash';

import { apiV0 } from 'src/common/services/api';
import history from 'src/client/services/history';
import {
  CALCULATOR_FETCH_CARD,
  CALCULATOR_FETCH_CARD_SUCCEED,
  CALCULATOR_FETCH_CARD_FAILED,
  CALCULATOR_FETCH_AVAILABLE_FOODS,
  CALCULATOR_FETCH_AVAILABLE_FOODS_SUCCEED,
  CALCULATOR_FETCH_AVAILABLE_FOODS_FAILED,
  CALCULATOR_SAVE_RESULTS,
  CALCULATOR_SAVE_RESULTS_SUCCEED,
  CALCULATOR_SAVE_RESULTS_FAILED,
  CALCULATOR_CHANGE_FIELD,
  CALCULATOR_ADD_FOOD,
  CALCULATOR_REMOVE_FOOD,
  CALCULATOR_RESET
} from 'src/client/actionTypes/calculator';


export function fetchCard() {
  return dispatch => {
    dispatch({ type: CALCULATOR_FETCH_CARD });

    apiV0.get(`user-card/`)
    .then(response => {
      dispatch(fetchCardSucceed(response));
    })
    .catch(response => {
      dispatch(fetchCardFailed(response));
    });
  }
}

function fetchCardSucceed(response) {
  let data = response.data;
  let card = {
    ...data.card
  };
  return { type: CALCULATOR_FETCH_CARD_SUCCEED, card };
}

function fetchCardFailed(response) {
  return { type: CALCULATOR_FETCH_CARD_FAILED };
}

export function fetchAvailableFoods(search) {
  return dispatch => {
    dispatch({ type: CALCULATOR_FETCH_AVAILABLE_FOODS, search });

    let params = {
      search
    };

    apiV0.get(`available-foods`, { params })
    .then(response => {
      dispatch(fetchAvailableFoodsSucceed(response));
    })
    .catch(response => {
      dispatch(fetchAvailableFoodsFailed(response));
    });
  }
}

function fetchAvailableFoodsSucceed(response) {
  let data = response.data;
  let { foods } = data
  return { type: CALCULATOR_FETCH_AVAILABLE_FOODS_SUCCEED, foods };
}

function fetchAvailableFoodsFailed(response) {
  return { type: CALCULATOR_FETCH_AVAILABLE_FOODS_FAILED };
}

export function saveResults() {
  return (dispatch, getState) => {
    let calculator = _.get(getState(), 'calculator');

    dispatch({ type: CALCULATOR_SAVE_RESULTS });

    let params = {
    };

    apiV0.patch(`user-results`, params)
    .then(response => {
      let { food } = response.data;
      let { _id: id } = food;
      dispatch(saveResultsSucceed(response));
      history.replace(`/food/${id}`);
    })
    .catch(response => {
      dispatch(saveResultsFailed(response));
    });
  }
}

function saveResultsSucceed(response) {
  return { type: CALCULATOR_SAVE_RESULTS_SUCCEED };
}

function saveResultsFailed(response) {
  return { type: CALCULATOR_SAVE_RESULTS_FAILED };
}

export function changeField(payload) {
  return (dispatch, getState) => {
    dispatch({ type: CALCULATOR_CHANGE_FIELD, ...payload });
  }
}

export function addFood() {
  return { type: CALCULATOR_ADD_FOOD };
}

export function removeFood(foodId) {
  return { type: CALCULATOR_REMOVE_FOOD, foodId };
}

export function reset() {
  return { type: CALCULATOR_RESET };
}
