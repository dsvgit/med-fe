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
  reset
} from 'src/admin/actions/users/list';
import { setTitle } from 'src/admin/actions/app';
import UsersOverview from 'src/admin/components/users/UsersOverview';

class UsersOverviewContainer extends C {
  componentDidMount() {
    let {
      setTitle,
      reset,
      fetchUsers
      } = this.props;

    reset();
    setTitle('Пользователи');
    fetchUsers();
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
  let { users } = state.users.list;
  return {
    users
  };
}

let mapDispatchToProps = dispatch => {
  return {
    goToCreate() {
      history.replace('/user/new');
    },
    fetchUsers() {
      dispatch(fetchUsers());
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
