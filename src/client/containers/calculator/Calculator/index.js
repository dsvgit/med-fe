import React, {
  Component as C
} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  fetchCard,
  fetchAvailableFoods,
  changeField,
  addFood,
  removeFood,
  reset
} from 'src/client/actions/calculator';
import { setTitle } from 'src/client/actions/app';
import Calculator from 'src/client/components/calculator/Calculator';


@withRouter
class CalculatorContainer extends C {
  componentDidMount() {
    let {
      reset,
      fetch,
      fetchAvailableFoods,
      setTitle
      } = this.props;

    reset();
    fetch();
    fetchAvailableFoods();
    setTitle('Калькулятор');
  }

  componentWillUnmount() {
    let { setTitle } = this.props;
    setTitle();
  }

  render() {
    return <Calculator { ...this.props } />
  }
}

let mapStateToProps = state => {
  return state.calculator;
}

let mapDispatchToProps = dispatch => {
  return {
    fetch() {
      dispatch(fetchCard());
    },
    reset() {
      dispatch(reset());
    },
    fetchAvailableFoods(search) {
      dispatch(fetchAvailableFoods(search));
    },
    setTitle(title) {
      dispatch(setTitle(title));
    },
    addFood(payload) {
      dispatch(addFood(payload));
    },
    removeFood(payload) {
      dispatch(removeFood(payload));
    },
    changeField(payload) {
      dispatch(changeField({ ...payload, context: 'form' }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
