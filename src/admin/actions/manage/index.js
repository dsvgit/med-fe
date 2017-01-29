import { apiV0 } from 'src/common/services/api';
import {
  MANAGE_IMPORT_FOODS,
  MANAGE_IMPORT_FOODS_SUCCEED,
  MANAGE_IMPORT_FOODS_FAILED
} from 'src/admin/actionTypes/manage';

export function importFoods() {
  return (dispatch, getState) => {
    let manageState = _.get(getState(), 'manage');
    let {
      importFoodsPending
      } = manageState;

    if (importFoodsPending) return;

    dispatch({ type: MANAGE_IMPORT_FOODS });

    apiV0.post(`import/foods/`)
    .then(response => {
      dispatch(importFoodsSucceed(response));
    })
    .catch(response => {
      dispatch(importFoodsFailed(response));
    });
  }
}

function importFoodsSucceed(response) {
  return { type: MANAGE_IMPORT_FOODS_SUCCEED };
}

function importFoodsFailed(response) {
  return { type: MANAGE_IMPORT_FOODS_FAILED };
}
