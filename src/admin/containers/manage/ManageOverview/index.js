import React, {
  Component as C,
} from 'react';
import { connect } from 'react-redux';

import { setTitle } from 'src/admin/actions/app';
import {
  importFoods
} from 'src/admin/actions/manage';
import ManageOverview from 'src/admin/components/manage/ManageOverview';

class ManageOverviewContainer extends C {
  componentDidMount() {
    let {
      setTitle
      } = this.props;
    setTitle('Натсройки');
  }

  componentWillUnmount() {
    let { setTitle } = this.props;
    setTitle();
  }

  render() {
    return <ManageOverview { ...this.props } />
  }
}

let mapStateToProps = state => {
  return { };
}

let mapDispatchToProps = dispatch => {
  return {
    setTitle(title) {
      dispatch(setTitle(title));
    },
    importFoods() {
      dispatch(importFoods())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOverviewContainer);
