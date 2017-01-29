import React, {
  Component as C
} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  fetchFood,
  saveFood,
  changeField,
  goToOverview,
  reset
} from 'src/client/actions/foods/editor';
import { setTitle } from 'src/client/actions/app';
import FoodsEditor from 'src/common/components/food/FoodsEditor';


@withRouter
class FoodsEditorContainer extends C {
  componentDidMount() {
    let {
      reset,
      fetch,
      setTitle,
      params: {
        foodId
        }
      } = this.props;

    reset();
    if (foodId) {
      fetch(foodId)
      setTitle('Редактирование продукта');
    } else {
      setTitle('Добавление продукта');
    }
  }

  componentWillUnmount() {
    let { setTitle } = this.props;
    setTitle();
  }

  render() {
    return <FoodsEditor { ...this.props } />
  }
}

let mapStateToProps = state => {
  return state.foods.editor;
}

let mapDispatchToProps = dispatch => {
  return {
    fetch(id) {
      dispatch(fetchFood(id));
    },
    reset(food) {
      dispatch(reset(food));
    },
    saveFood() {
      dispatch(saveFood());
    },
    setTitle(title) {
      dispatch(setTitle(title));
    },
    changeField(payload) {
      dispatch(changeField({ ...payload, context: 'food' }));
    },
    goToOverview() {
      goToOverview();
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodsEditorContainer);
