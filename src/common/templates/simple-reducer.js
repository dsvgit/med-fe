import _ from 'lodash';

import {
  STATISTICS_FETCH_STATISTICS,
  STATISTICS_FETCH_STATISTICS_SUCCEED,
  STATISTICS_FETCH_STATISTICS_FAILED,
  STATISTICS_RESET
} from 'src/client/actionTypes/statistics';
import requestReducer from 'src/common/reducers/request';

export default function (state, action) {
  let defaultState = {
    statistics: null,
    statisticsRequest: requestReducer.init(state)
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  switch (action.type) {
    case STATISTICS_FETCH_STATISTICS:
      return {
        ...state,
        statisticsRequest: requestReducer.request(state)
      };
    case STATISTICS_FETCH_STATISTICS_SUCCEED:
      return {
        ...state,
        statisticsRequest: requestReducer.succeed(state)
      };
    case STATISTICS_FETCH_STATISTICS_FAILED:
      return {
        ...state,
        statisticsRequest: requestReducer.failed(state)
      };
    case STATISTICS_RESET:
      return defaultState;
    default:
      return state;
  }
}
