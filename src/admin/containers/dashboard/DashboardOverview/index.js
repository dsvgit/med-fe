import React, {
  Component as C,
} from 'react';
import { connect } from 'react-redux';

import { setTitle } from 'src/admin/actions/app';
import DashboardOverview from 'src/admin/components/dashboard/DashboardOverview';

class DashboardOverviewContainer extends C {
  componentDidMount() {
    let {
      setTitle
      } = this.props;
    setTitle('Главная');
  }

  componentWillUnmount() {
    let { setTitle } = this.props;
    setTitle();
  }

  render() {
    return <DashboardOverview { ...this.props } />
  }
}

let mapStateToProps = state => {
  return { };
}

let mapDispatchToProps = dispatch => {
  return {
    setTitle(title) {
      dispatch(setTitle(title));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardOverviewContainer);
