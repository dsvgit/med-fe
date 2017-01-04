import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { changeLogin, changePassword, login } from '../../actions/loginPageActions';

import './index.scss';

class Login extends React.Component {
  render() {
    let {
      changeLogin,
      changePassword,
      handleLogin,
      loginPage
      } = this.props;

    let {
      login= '',
      password = '',
      error
      } = loginPage;

    return (
      <div className="login-page-main">
        <Paper zDepth={2} className="login-page-form-main">
          <h2 className="login-header">Войдите в систему</h2>
          <form>
            <TextField
              hintText="Логин"
              floatingLabelText="Логин"
              onChange={changeLogin}
              value={login} />
            <TextField
              hintText="Пароль"
              floatingLabelText="Пароль"
              type="password"
              onChange={changePassword}
              value={password} />
            { error ? <div className="error">Неверный логин или пароль</div> : null }
            <FlatButton
              style={{'marginTop': '15px'}}
              label="Войти"
              secondary={true}
              onClick={handleLogin.bind(null, loginPage)}>
            </FlatButton>
          </form>
        </Paper>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    loginPage: state.loginPage
  };
}

let mapDispatchToProps = dispatch => {
  return {
    changeLogin(e, login) {
      dispatch(changeLogin(login));
    },
    changePassword(e, password) {
      dispatch(changePassword(password));
    },
    handleLogin(credentials) {
      dispatch(login(credentials));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
