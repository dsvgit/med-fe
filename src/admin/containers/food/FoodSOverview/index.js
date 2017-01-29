import React, {
  Component as C,
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import history from 'src/admin/services/history';
import {
  fetchFoods,
  deleteFoods,
  foodsSelect,
  reset,
  getNextPageData,
  getPrevPageData,
  changeField
} from 'src/admin/actions/foods/list';
import { setTitle } from 'src/admin/actions/app';
import FoodsOverview from 'src/admin/components/food/FoodsOverview';


class FoodsOverviewContainer extends C {
  componentDidMount() {
    let {
      setTitle,
      reset,
      fetchFoods
      } = this.props;

    reset();
    setTitle('Продукты');
    fetchFoods();
  }

  componentWillUnmount() {
    let { setTitle } = this.props;
    setTitle();
  }

  render() {
    return <FoodsOverview { ...this.props } />
  }
}

let mapStateToProps = state => {
  let { foods, total, pageSize, page, search } = state.foods.list;
  return {
    foods,
    total,
    pageSize,
    page,
    search
  };
}

let mapDispatchToProps = dispatch => {
  return {
    goToCreate() {
      history.replace('/food/new');
    },
    getNextPageData() {
      dispatch(getNextPageData());
    },
    getPrevPageData() {
      dispatch(getPrevPageData());
    },
    fetchFoods(payload) {
      dispatch(fetchFoods(payload));
    },
    reset() {
      dispatch(reset());
    },
    handleSelect(ids) {
      dispatch(foodsSelect(ids));
    },
    handleDelete(ids) {
      dispatch(deleteFoods(ids));
    },
    setTitle(title) {
      dispatch(setTitle(title));
    },
    changeField(payload) {
      dispatch(changeField(payload));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodsOverviewContainer);
