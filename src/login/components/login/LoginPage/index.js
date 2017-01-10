import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

import './index.scss';


export default ({
  login,
  password,
  error,
  pending,
  changeTextField,
  handleLogin
  }) => {
  let progress = (
    <div className="progress">
      <CircularProgress size={40} thickness={4} />;
    </div>
  );
  let overlay = <div className="overlay" />

  return (
    <div className="login-page-main">
      <Paper zDepth={2} className="login-page-form-main">
        <h2 className="login-header">Войдите в систему</h2>
        <form>
          <TextField
            hintText="Логин"
            floatingLabelText="Логин"
            onChange={(e, v) => changeTextField({ name: 'login', value: v })}
            value={login} />
          <TextField
            hintText="Пароль"
            floatingLabelText="Пароль"
            type="password"
            onChange={(e, v) => changeTextField({ name: 'password', value: v })}
            value={password} />
          { error ? <div className="error">Неверный логин или пароль</div> : null }
          <FlatButton
            style={{'marginTop': '15px'}}
            label="Войти"
            secondary={true}
            onClick={() => handleLogin({ login, password })}>
          </FlatButton>
        </form>
        { pending ? progress : null }
        { pending ? overlay : null }
      </Paper>
    </div>
  );
}