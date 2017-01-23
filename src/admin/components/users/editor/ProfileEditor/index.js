import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';


export default props => {
  let {
    user: {
      id,
      login,
      firstname,
      lastname,
      email,
      password,
      isAdmin
      },
    changeField
    } = props;

  const styles = {
    block: {
      maxWidth: 250,
    }
  };

  return (
    <div>
      <div style={styles.block}>
        <TextField
          floatingLabelText="Логин"
          value={login}
          onChange={(e, v) => changeField({ name: 'login', value: v })}
          floatingLabelFixed={true}
        />
        <br />
        <TextField
          floatingLabelText="Имя"
          value={firstname}
          onChange={(e, v) => changeField({ name: 'firstname', value: v })}
          floatingLabelFixed={true}
        />
        <br />
        <TextField
          floatingLabelText="Фамилия"
          value={lastname}
          onChange={(e, v) => changeField({ name: 'lastname', value: v })}
          floatingLabelFixed={true}
        />
        <br />
        <TextField
          floatingLabelText="E-mail"
          value={email}
          onChange={(e, v) => changeField({ name: 'email', value: v })}
          floatingLabelFixed={true}
        />
        <br />
        <TextField
          floatingLabelText="Пароль"
          value={password}
          type="password"
          onChange={(e, v) => changeField({ name: 'password', value: v })}
          floatingLabelFixed={true}
        />
        <br />
        <Checkbox
          label="Аминистратор"
          checked={isAdmin}
          onCheck={(e, v) => changeField({ name: 'isAdmin', value: v })}
        />
      </div>
    </div>
  );
};
