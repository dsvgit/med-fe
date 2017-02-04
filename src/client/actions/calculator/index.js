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
  CALCULATOR_FETCH_RESULTS,
  CALCULATOR_FETCH_RESULTS_SUCCEED,
  CALCULATOR_FETCH_RESULTS_FAILED,
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

export function fetchResults() {
  return dispatch => {
    dispatch({ type: CALCULATOR_FETCH_RESULTS });

    apiV0.get(`user-results/`)
    .then(response => {
      dispatch(fetchResultsSucceed(response));
    })
    .catch(response => {
      dispatch(fetchResultsFailed(response));
    });
  }
}

function fetchResultsSucceed(response) {
  let data = response.data;
  let { addedFoods } = data;
  return { type: CALCULATOR_FETCH_RESULTS_SUCCEED, addedFoods };
}

function fetchResultsFailed(response) {
  return { type: CALCULATOR_FETCH_RESULTS_FAILED };
}

export function saveResults() {
  return (dispatch, getState) => {
    let calculator = _.get(getState(), 'calculator');
    let {
      addedFoods
      } = calculator;

    dispatch({ type: CALCULATOR_SAVE_RESULTS });

    let params = {
      addedFoods
    };

    apiV0.patch(`user-results`, params)
    .then(response => {
      dispatch(saveResultsSucceed(response));
    })
    .catch(response => {
      dispatch(saveResultsFailed(response));
    });
  }
}

function saveResultsSucceed(response) {
  let addedFoods = response.data.addedFoods;
  return { type: CALCULATOR_SAVE_RESULTS_SUCCEED, addedFoods };
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
  return dispatch => {
    dispatch({ type: CALCULATOR_ADD_FOOD });
    dispatch(fetchAvailableFoods());
    dispatch(saveResults());
  };
}

export function removeFood(foodId) {
  return dispatch => {
    dispatch({ type: CALCULATOR_REMOVE_FOOD, foodId });
    dispatch(saveResults());
  };
}

export function reset() {
  return { type: CALCULATOR_RESET };
}
