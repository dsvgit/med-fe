import {
  MANAGE_IMPORT_FOODS,
  MANAGE_IMPORT_FOODS_SUCCEED,
  MANAGE_IMPORT_FOODS_FAILED
} from 'src/admin/actionTypes/manage';

export default function (state, action) {
  let defaultState = {
    importFoodsPending: false
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  switch (action.type) {
    case MANAGE_IMPORT_FOODS:
      return {
        ...state,
        importFoodsPending: true
      };
    case MANAGE_IMPORT_FOODS_SUCCEED:
      return {
        ...state,
        importFoodsPending: false
      };
      return state;
    case MANAGE_IMPORT_FOODS_FAILED:
      return {
        ...state,
        importFoodsPending: false
      };
    default:
      return state;
  }
}
