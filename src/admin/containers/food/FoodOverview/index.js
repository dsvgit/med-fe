import React, {
  Component as C,
} from 'react';
import { connect } from 'react-redux';

import { setTitle } from 'src/admin/actions/app';
import FoodOverview from 'src/admin/components/food/FoodOverview';

class FoodOverviewContainer extends C {
  componentDidMount() {
    let {
      setTitle
      } = this.props;
    setTitle('Продукты');
  }

  componentWillUnmount() {
    let { setTitle } = this.props;
    setTitle();
  }

  render() {
    return <FoodOverview { ...this.props } />
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

export default connect(mapStateToProps, mapDispatchToProps)(FoodOverviewContainer);
