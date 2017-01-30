import _ from 'lodash';

import {
  CALCULATOR_FETCH_CARD,
  CALCULATOR_FETCH_CARD_SUCCEED,
  CALCULATOR_FETCH_CARD_FAILED,
  CALCULATOR_FETCH_AVAILABLE_FOODS,
  CALCULATOR_FETCH_AVAILABLE_FOODS_SUCCEED,
  CALCULATOR_FETCH_AVAILABLE_FOODS_FAILED,
  CALCULATOR_CHANGE_FIELD,
  CALCULATOR_ADD_FOOD,
  CALCULATOR_REMOVE_FOOD,
  CALCULATOR_RESET
} from 'src/client/actionTypes/calculator';

let getValue = (source, name, amount) => {
  if (!source) return 0;
  return (parseInt(source[name] * amount)) || 0;
}

export default function (state, action) {
  let defaultState = {
    foods: [],
    card: {
      prot: 0,
      fats: 0,
      carb: 0,
      calories: 0
    },
    form: {
      selectedFood: null,
      amount: 10
    },
    search: '',
    addedFoods: [],
    fetchError: false,
    fetchPending: false
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  switch (action.type) {
    case CALCULATOR_FETCH_CARD:
      return {
        ...state,
        fetchError: false,
        fetchPending: true
      };
    case CALCULATOR_FETCH_CARD_SUCCEED:
      let {
        card,
        card: {
          _id: id
          }
        } = action;
      return {
        ...state,
        card: {
          ...card,
          id
        },
        fetchError: false,
        fetchPending: false
      };
    case CALCULATOR_FETCH_AVAILABLE_FOODS:
      let { search } = action;
      return {
        ...state,
        search
      };
    case CALCULATOR_FETCH_AVAILABLE_FOODS:
      return {
        ...state,
        fetchError: false,
        fetchPending: true
      };
    case CALCULATOR_FETCH_AVAILABLE_FOODS_SUCCEED:
      let { foods } = action;
      return {
        ...state,
        foods,
        fetchError: false,
        fetchPending: false
      };
    case CALCULATOR_FETCH_AVAILABLE_FOODS_FAILED:
      return {
        ...state,
        fetchError: true,
        fetchPending: false
      };
    case CALCULATOR_CHANGE_FIELD:
      let { name, value, context } = action;
      return {
        ...state,
        [context]: {
          ...state[context],
          [name]: value
        }
      };
    case CALCULATOR_ADD_FOOD:
      let {
        form: {
          selectedFood,
          amount
          }
        } = state;
      if (!selectedFood) {
        return state;
      }
      return {
        ...state,
        addedFoods: [
          ...state.addedFoods,
          {
            ...selectedFood,
            calories: getValue(selectedFood, 'calories', amount),
            prot: getValue(selectedFood, 'prot', amount),
            fats: getValue(selectedFood, 'fats', amount),
            carb: getValue(selectedFood, 'carb', amount)
          }
        ]
      };
    case CALCULATOR_REMOVE_FOOD:
      let { foodId } = action;
      let addedFoods = state.addedFoods.slice();
      _.remove(addedFoods, food => food._id == foodId);
      return {
        ...state,
        addedFoods
      };
    case CALCULATOR_RESET:
      return defaultState;
    default:
      return state;
  }
}
