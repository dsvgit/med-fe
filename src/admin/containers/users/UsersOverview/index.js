import React, {
  Component as C,
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import history from 'src/admin/services/history';
import {
  fetchUsers,
  deleteUsers,
  usersSelect,
  reset,
  prevPage,
  nextPage
} from 'src/admin/actions/users/list';
import { setTitle } from 'src/admin/actions/app';
import UsersOverview from 'src/admin/components/users/UsersOverview';

class UsersOverviewContainer extends C {
  componentDidMount() {
    let {
      setTitle,
      reset,
      fetchUsers,
      pageSize,
      page
      } = this.props;

    reset();
    setTitle('Пользователи');
    fetchUsers({pageSize, page});
  }

  componentWillUnmount() {
    let { setTitle } = this.props;
    setTitle();
  }

  render() {
    return <UsersOverview { ...this.props } />
  }
}

let mapStateToProps = state => {
  let { users, total, pageSize, page } = state.users.list;
  return {
    users,
    total,
    pageSize,
    page
  };
}

let mapDispatchToProps = dispatch => {
  return {
    goToCreate() {
      history.replace('/user/new');
    },
    nextPage() {
      dispatch(nextPage());
    },
    prevPage() {
      dispatch(prevPage());
    },
    fetchUsers(payload) {
      dispatch(fetchUsers(payload));
    },
    reset() {
      dispatch(reset());
    },
    handleSelect(ids) {
      dispatch(usersSelect(ids));
    },
    handleDelete(ids) {
      dispatch(deleteUsers(ids));
    },
    setTitle(title) {
      dispatch(setTitle(title));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersOverviewContainer);
