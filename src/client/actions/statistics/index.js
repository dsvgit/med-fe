import _ from 'lodash';

import { apiV0 } from 'src/common/services/api';
import history from 'src/client/services/history';
import {
  STATISTICS_FETCH_STATISTICS,
  STATISTICS_FETCH_STATISTICS_SUCCEED,
  STATISTICS_FETCH_STATISTICS_FAILED,
  STATISTICS_RESET
} from 'src/client/actionTypes/statistics';


export function fetchStatistics() {
  return dispatch => {
    dispatch({ type: STATISTICS_FETCH_STATISTICS });

    apiV0.get(`user-statistics/`)
    .then(response => {
      dispatch(fetchStatisticsSucceed(response));
    })
    .catch(response => {
      dispatch(fetchStatisticsFailed(response));
    });
  }
}

function fetchStatisticsSucceed(response) {
  let data = response.data;
  let statistics = {
    ...data.statistics
  };
  return { type: STATISTICS_FETCH_STATISTICS_SUCCEED, statistics };
}

function fetchStatisticsFailed(response) {
  return { type: STATISTICS_FETCH_STATISTICS_FAILED };
}

export function reset() {
  return { type: STATISTICS_RESET };
}
