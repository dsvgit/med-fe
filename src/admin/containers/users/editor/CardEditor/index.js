import React, {
  Component as C
} from 'react';
import { connect } from 'react-redux';

import {
  changeField
} from 'src/admin/actions/users/editor';
import CardEditor from 'src/admin/components/users/editor/CardEditor';


class CardEditorContainer extends C {
  render() {
    return <CardEditor { ...this.props } />
  }
}

let mapStateToProps = state => {
  return state.users.editor;
}

let mapDispatchToProps = dispatch => {
  return {
    changeField(payload) {
      dispatch(changeField({ ...payload, context: 'card' }));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardEditorContainer);
