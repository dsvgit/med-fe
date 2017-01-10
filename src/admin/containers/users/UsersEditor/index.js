import React, {
  Component as C
} from 'react';
import { connect } from 'react-redux';

import {
  fetchUser,
  saveUser,
  changeField,
  reset
} from 'src/admin/actions/users/editor';
import UsersEditor from 'src/admin/components/users/UsersEditor';


class UsersEditorContainer extends C {
  componentDidMount() {
    let {
      reset,
      fetch
      } = this.props;

    reset();
    fetch();
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
    changeField(payload) {
      dispatch(changeField(payload));
    },
    fetch(user) {
      dispatch(fetchUser(user));
    },
    reset(user) {
      dispatch(reset(user));
    },
    save(user) {
      dispatch(saveUser(user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersEditorContainer);
