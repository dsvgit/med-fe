import React, {
  Component as C
} from 'react';
import { connect } from 'react-redux';

import {
  changeField
} from 'src/admin/actions/users/editor';
import ProfileEditor from 'src/admin/components/users/editor/ProfileEditor';


class ProfileEditorContainer extends C {
  render() {
    return <ProfileEditor { ...this.props } />
  }
}

let mapStateToProps = state => {
  return state.users.editor;
}

let mapDispatchToProps = dispatch => {
  return {
    changeField(payload) {
      dispatch(changeField({ ...payload, context: 'user' }));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditorContainer);
