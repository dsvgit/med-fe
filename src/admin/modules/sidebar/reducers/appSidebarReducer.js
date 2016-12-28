import { DRAWER_SIDEBAR_OPEN, DRAWER_SIDEBAR_CLOSE } from '../constants/appSidebarConstants';

export default (state, action) => {
  if (typeof state === 'undefined') {
    state = {
      open: false
    };
  }

  if (action.type === DRAWER_SIDEBAR_OPEN) {
    return {...state, open: true};
  }
  else if (action.type === DRAWER_SIDEBAR_CLOSE) {
    return {...state, open: false};
  }
  else {
    return state;
  }
}
