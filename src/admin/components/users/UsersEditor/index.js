import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';


export default props => {
  let {
    user,
    user: {
      id,
      username,
      email,
      password,
      isAdmin
      },
    changeField,
    save
    } = props;

  const styles = {
    block: {
      maxWidth: 250,
    }
  };

  return (
    <BaseLayout>
      <div style={styles.block}>
        <TextField
          floatingLabelText="Имя"
          value={username}
          onChange={(e, v) => changeField({ name: 'username', value: v })}
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
        <br />
        <RaisedButton
          label="Сохранить"
          primary={true}
          onClick={() => save(user)}
        />
      </div>
    </BaseLayout>
  );
};
