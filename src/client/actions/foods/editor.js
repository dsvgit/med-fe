import _ from 'lodash';
import Validator from 'framework-validator';

import { apiV0 } from 'src/common/services/api';
import history from 'src/client/services/history';
import {
  FOODS_EDITOR_FETCH_FOOD,
  FOODS_EDITOR_FETCH_FOOD_SUCCEED,
  FOODS_EDITOR_FETCH_FOOD_FAILED,
  FOODS_EDITOR_SAVE_FOOD,
  FOODS_EDITOR_SAVE_FOOD_SUCCEED,
  FOODS_EDITOR_SAVE_FOOD_FAILED,
  FOODS_EDITOR_CHANGE_FIELD,
  FOODS_EDITOR_VALIDATE,
  FOODS_EDITOR_RESET
} from 'src/client/actionTypes/foods/editor';


var schema = {
  title: 'required',
  //prot: 'numeric|between:0,100',
  //fats: 'numeric|between:0,100',
  //carb: 'numeric|between:0,100',
  //calories: 'numeric|between:0,1000'
};

export function fetchFood(id) {
  return dispatch => {
    dispatch({ type: FOODS_EDITOR_FETCH_FOOD });

    apiV0.get(`user-food/${id}/`)
    .then(response => {
      dispatch(fetchFoodSucceed(response));
    })
    .catch(response => {
      dispatch(fetchFoodFailed(response));
      history.replace('/foods');
    });
  }
}

function fetchFoodSucceed(response) {
  let data = response.data;
  let food = {
    ...data.food
  };
  return { type: FOODS_EDITOR_FETCH_FOOD_SUCCEED, food };
}

function fetchFoodFailed(response) {
  return { type: FOODS_EDITOR_FETCH_FOOD_FAILED };
}

export function saveFood() {
  return (dispatch, getState) => {
    let editor = _.get(getState(), 'foods.editor');
    let {
      food,
      savingPending
      } = editor;
    if (savingPending) return;

    dispatch({ type: FOODS_EDITOR_SAVE_FOOD });

    if (!validate(dispatch, getState)) return;

    let _food = _.pick(food, ['title', 'prot', 'fats', 'carb', 'calories']);

    let params = {
      food: _food
    };
    let savePromise;
    if (!food.id) {
      savePromise = apiV0.post(`user-food/`, params);
    } else {
      savePromise = apiV0.patch(`user-food/${food.id}/`, params);
    }

    savePromise
    .then(response => {
      let { food } = response.data;
      let { _id: id } = food;
      dispatch(saveFoodSucceed(response));
      history.replace(`/food/${id}`);
    })
    .catch(response => {
      dispatch(saveFoodFailed(response));
    });
  }
}

function saveFoodSucceed(response) {
  return { type: FOODS_EDITOR_SAVE_FOOD_SUCCEED, food: response.data.food };
}

function saveFoodFailed(response) {
  return { type: FOODS_EDITOR_SAVE_FOOD_FAILED };
}

export function changeField(payload) {
  return (dispatch, getState) => {
    dispatch({ type: FOODS_EDITOR_CHANGE_FIELD, ...payload });
    validate(dispatch, getState);
  }
}

export function goToOverview() {
  history.replace('/food');
}

function validate(dispatch, getState) {
  let food = _.get(getState(), 'foods.editor.food');
  let _schema = Object.assign({}, schema);
  let validation = new Validator(food, _schema);
  let passes = validation.passes();
  dispatch({ type: FOODS_EDITOR_VALIDATE, errors: validation.errors });
  return passes;
}

export function reset() {
  return { type: FOODS_EDITOR_RESET };
}
