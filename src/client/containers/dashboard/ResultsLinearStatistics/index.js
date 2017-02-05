import React, {
  Component as C,
} from 'react';
import { connect } from 'react-redux';

import ResultsLinearStatistics from 'src/common/components/dashboard/ResultsLinearStatistics';


class ResultsLinearStatisticsContainer extends C {
  render() {
    return <ResultsLinearStatistics { ...this.props } />
  }
}

let mapStateToProps = state => {
  return state.statistics;
}

let mapDispatchToProps = dispatch => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsLinearStatisticsContainer);
