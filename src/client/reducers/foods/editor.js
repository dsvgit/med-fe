import {
  FOODS_EDITOR_FETCH_FOOD,
  FOODS_EDITOR_FETCH_FOOD_SUCCEED,
  FOODS_EDITOR_FETCH_FOOD_FAILED,
  FOODS_EDITOR_SAVE_FOOD,
  FOODS_EDITOR_SAVE_FOOD_SUCCEED,
  FOODS_EDITOR_SAVE_FOOD_FAILED,
  FOODS_EDITOR_CHANGE_FIELD,
  FOODS_EDITOR_CHANGE_TAB,
  FOODS_EDITOR_RESET,
  FOODS_EDITOR_VALIDATE
} from 'src/client/actionTypes/foods/editor';

export default function (state, action) {
  let defaultState = {
    food: {
      id: '',
      title: '',
      prot: 0,
      fats: 0,
      carb: 0,
      calories: 0
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
    case FOODS_EDITOR_FETCH_FOOD:
      return {
        ...state,
        fetchError: false,
        fetchPending: true
      };
    case FOODS_EDITOR_FETCH_FOOD_SUCCEED:
      let {
        food,
        food: {
          _id: id
          }
        } = action;
      return {
        ...state,
        food: {
          ...food,
          id
        },
        fetchError: false,
        fetchPending: false
      };
    case FOODS_EDITOR_FETCH_FOOD_FAILED:
      return {
        ...state,
        fetchError: true,
        fetchPending: false
      };
    case FOODS_EDITOR_CHANGE_FIELD:
      let { name, value, context } = action;
      return {
        ...state,
        [context]: {
          ...state[context],
          [name]: value
        }
      };
    case FOODS_EDITOR_VALIDATE:
      let { errors } = action;
      return {
        ...state,
        errors
      };
    case FOODS_EDITOR_SAVE_FOOD:
      return {
        ...state,
        savePending: true
      };
    case FOODS_EDITOR_SAVE_FOOD_SUCCEED:
      return {
        ...state,
        food: {
          ...action.food,
          id: action.food._id
        },
        savePending: false
      };
    case FOODS_EDITOR_SAVE_FOOD_FAILED:
      return {
        ...state,
        savePending: false
      };
    case FOODS_EDITOR_RESET:
      return defaultState;
    default:
      return state;
  }
}
