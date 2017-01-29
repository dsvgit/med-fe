import React, {
  Component as C
} from 'react';
import { connect } from 'react-redux';

import {
  fetchProfile,
  saveProfile,
  changeField,
  reset
} from 'src/client/actions/profile';
import { setTitle } from 'src/client/actions/app';
import ProfileEditor from 'src/client/components/profile/ProfileEditor';


class ProfileEditorContainer extends C {
  componentDidMount() {
    let {
      reset,
      fetch,
      setTitle
      } = this.props;

    reset();
    fetch()
    setTitle('Мой профиль');
  }

  componentWillUnmount() {
    let { setTitle } = this.props;
    setTitle();
  }

  render() {
    return <ProfileEditor { ...this.props } />
  }
}

let mapStateToProps = state => {
  return state.profile;
}

let mapDispatchToProps = dispatch => {
  return {
    changeField(payload) {
      dispatch(changeField({ ...payload, context: 'user' }));
    },
    fetch() {
      dispatch(fetchProfile());
    },
    reset() {
      dispatch(reset());
    },
    saveProfile() {
      dispatch(saveProfile());
    },
    setTitle(title) {
      dispatch(setTitle(title));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditorContainer);
