import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import BaseLayout from 'src/client/containers/layouts/BaseLayout';
import timezones from './timezones';

export default props => {
  let {
    user: {
      login,
      firstname,
      lastname,
      email,
      password,
      timezone
      },
    errors,
    changeField,
    saveProfile
    } = props;

  const styles = {
    block: {
      maxWidth: 250,
    }
  };

  let getError = field => errors.first && errors.first(field);

  return (
    <BaseLayout>
      <div style={styles.block}>
        <TextField
          floatingLabelText="Имя"
          value={firstname}
          onChange={(e, v) => changeField({ name: 'firstname', value: v })}
          floatingLabelFixed={true}
          errorText={getError('firstname')}
        /><br />
        <TextField
          floatingLabelText="Фамилия"
          value={lastname}
          onChange={(e, v) => changeField({ name: 'lastname', value: v })}
          floatingLabelFixed={true}
          errorText={getError('lastname')}
        />
        <br />
        <TextField
          floatingLabelText="E-mail"
          value={email}
          onChange={(e, v) => changeField({ name: 'email', value: v })}
          floatingLabelFixed={true}
          errorText={getError('email')}
        />
        <br />
        <TextField
          floatingLabelText="Пароль"
          value={password}
          type="password"
          onChange={(e, v) => changeField({ name: 'password', value: v })}
          floatingLabelFixed={true}
          errorText={getError('password')}
        />
        <br />
        <SelectField
          floatingLabelText="Timezone"
          value={timezone}
          onChange={(e, i, v) => changeField({ name: 'timezone', value: v })} >
          {timezones.map((zone, i) => {
            return <MenuItem key={i} value={zone.value} primaryText={zone.title} />
          })}
        </SelectField>
      </div>
      <br />
      <RaisedButton
        label="Сохранить"
        primary={true}
        onClick={saveProfile}
        className="action-button"
      />
    </BaseLayout>
  );
};
