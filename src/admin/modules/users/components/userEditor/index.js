import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import history from 'src/admin/service/history';

import BaseLayout from 'src/admin/modules/framework/layouts/BaseLayout';

import { changeUserName, changeUserEmail, saveUser, addUser } from '../../actions/userEditorActions'


const UserEditor = (props) => {
  let {
    user,
    changeUserName,
    changeUserEmail,
    saveUser
    } = props;

  let {
    username = '',
    email = ''
    } = user;

  return (
    <BaseLayout>
      <div>
        <TextField
          floatingLabelText="Имя"
          value={username}
          onChange={(e, value) => changeUserName(value) }
          floatingLabelFixed={true}
        />
        <br />
        <TextField
          floatingLabelText="E-mail"
          value={email}
          onChange={(e, value) => changeUserEmail(value) }
          floatingLabelFixed={true}
        />
        <br />
        <RaisedButton
          label="Сохранить"
          primary={true}
          onClick={() => saveUser(user)}
        />
      </div>
    </BaseLayout>
  );
};

UserEditor.propTypes = {};
UserEditor.defaultProps = {};

let mapStateToProps = state => {
  return {
    user: state.user
  };
}

let mapDispatchToProps = dispatch => {
  return {
    changeUserName(username) {
      dispatch(changeUserName(username));
    },
    changeUserEmail(email) {
      dispatch(changeUserEmail(email));
    },
    saveUser(user) {
      if (user.id) {
        dispatch(saveUser(user));
      } else {
        dispatch(addUser(user));
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditor);
