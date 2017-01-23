import React, {
  Component as C
} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  fetchUser,
  saveUser,
  changeField,
  reset
} from 'src/admin/actions/users/editor';
import { setTitle } from 'src/admin/actions/app';
import UsersEditor from 'src/admin/components/users/editor/UsersEditor';


@withRouter
class UsersEditorContainer extends C {
  componentDidMount() {
    let {
      reset,
      fetch,
      setTitle,
      params: {
        userId
        }
      } = this.props;

    reset();
    if (userId) {
      fetch(userId)
      setTitle('Редактирование пользователя');
    } else {
      setTitle('Добавление пользователя');
    }
  }

  componentWillUnmount() {
    let { setTitle } = this.props;
    setTitle();
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
    save(payload) {
      dispatch(saveUser(payload));
    },
    setTitle(title) {
      dispatch(setTitle(title));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersEditorContainer);
