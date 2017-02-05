import _ from 'lodash';

import {
  STATISTICS_FETCH_STATISTICS,
  STATISTICS_FETCH_STATISTICS_SUCCEED,
  STATISTICS_FETCH_STATISTICS_FAILED,
  STATISTICS_RESET
} from 'src/client/actionTypes/statistics';
import * as requestReducer from 'src/common/reducers/request';

export default function (state, action) {
  let defaultState = {
    statistics: null,
    statisticsRequest: requestReducer.init()
  };

  if (typeof state === 'undefined') {
    state = defaultState;
  }

  switch (action.type) {
    case STATISTICS_FETCH_STATISTICS:
      return {
        ...state,
        statisticsRequest: requestReducer.request(state.statisticsRequest)
      };
    case STATISTICS_FETCH_STATISTICS_SUCCEED:
      let { statistics } = action;
      return {
        ...state,
        statistics: statistics,
        statisticsRequest: requestReducer.succeed(state.statisticsRequest)
      };
    case STATISTICS_FETCH_STATISTICS_FAILED:
      return {
        ...state,
        statisticsRequest: requestReducer.failed(state.statisticsRequest)
      };
    case STATISTICS_RESET:
      return defaultState;
    default:
      return state;
  }
}
