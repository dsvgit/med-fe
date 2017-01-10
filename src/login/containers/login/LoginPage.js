import React, {
  Component as C
} from 'react';
import { connect } from 'react-redux';

import {
  open,
  login,
  changeField
} from 'src/login/actions/login';
import LoginPage from 'src/login/components/login/LoginPage';


class LoginPageContainer extends C {
  componentDidMount() {
    let { handleOpen } = this.props;
    handleOpen();
  }

  render() {
    return <LoginPage { ...this.props } />
  }
}

let mapStateToProps = state => {
  let { login } = state;
  return { ...login };
}

let mapDispatchToProps = dispatch => {
  return {
    handleOpen() {
      dispatch(open());
    },
    handleLogin(payload) {
      dispatch(login(payload));
    },
    changeTextField(payload) {
      dispatch(changeField(payload));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
