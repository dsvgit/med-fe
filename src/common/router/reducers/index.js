import { ROUTE } from '../constatnts';

export default (state, action) => {
  if (action.type === ROUTE) {
    return action.payload;
  }
  else {
    return state;
  }
}
