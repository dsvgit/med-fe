import React, {
  Component as C
} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  fetchUser,
  saveUser,
  saveCard,
  changeField,
  changeTab,
  goToOverview,
  reset
} from 'src/admin/actions/users/editor';
import {
  fetchStatistics,
  reset as resetStatistics
} from 'src/admin/actions/statistics';
import { setTitle } from 'src/admin/actions/app';
import UsersEditor from 'src/admin/components/users/editor/UsersEditor';


@withRouter
class UsersEditorContainer extends C {
  componentDidMount() {
    let {
      reset,
      fetch,
      setTitle,
      resetStatistics,
      fetchStatistics,
      params: {
        userId
        }
      } = this.props;

    reset();
    resetStatistics();
    if (userId) {
      fetch(userId);
      fetchStatistics(userId);
      setTitle('Редактирование пользователя');
    } else {
      setTitle('Добавление пользователя');
    }
  }

  componentWillUnmount() {
    let {
      setTitle,
      reset,
      resetStatistics
      } = this.props;
    setTitle();
    reset();
    resetStatistics();
  }

  render() {
    return <UsersEditor { ...this.props } />
  }
}

let mapStateToProps = state => {
  return state.users.editor;
}

let mapDispatchToProps = dispatch => {
  return {
    fetch(id) {
      dispatch(fetchUser(id));
    },
    reset(user) {
      dispatch(reset(user));
    },
    saveUser() {
      dispatch(saveUser());
    },
    saveCard() {
      dispatch(saveCard());
    },
    changeTab(payload) {
      dispatch(changeTab(payload));
    },
    setTitle(title) {
      dispatch(setTitle(title));
    },
    fetchStatistics(id) {
      dispatch(fetchStatistics(id));
    },
    resetStatistics() {
      dispatch(resetStatistics());
    },
    goToOverview() {
      goToOverview();
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersEditorContainer);
