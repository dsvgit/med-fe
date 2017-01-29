import _ from 'lodash';
import Validator from 'framework-validator';

import { apiV0 } from 'src/common/services/api';
import history from 'src/client/services/history';
import {
  PROFILE_EDITOR_FETCH_PROFILE,
  PROFILE_EDITOR_FETCH_PROFILE_SUCCEED,
  PROFILE_EDITOR_FETCH_PROFILE_FAILED,
  PROFILE_EDITOR_SAVE_PROFILE,
  PROFILE_EDITOR_SAVE_PROFILE_SUCCEED,
  PROFILE_EDITOR_SAVE_PROFILE_FAILED,
  PROFILE_EDITOR_CHANGE_FIELD,
  PROFILE_EDITOR_VALIDATE,
  PROFILE_EDITOR_RESET
} from 'src/client/actionTypes/profile';
import { fetchCurrentUser } from 'src/client/actions/app';


var schema = {
  login: 'required|alpha_num',
  firstname: 'required|person_name',
  lastname: 'required|person_name',
  email: 'required|email'
};

export function fetchProfile(id) {
  return dispatch => {
    dispatch({ type: PROFILE_EDITOR_FETCH_PROFILE });

    apiV0.get(`current/`)
    .then(response => {
      dispatch(fetchProfileSucceed(response));
    })
    .catch(response => {
      dispatch(fetchProfileFailed(response));
      history.replace('/');
    });
  }
}

function fetchProfileSucceed(response) {
  let data = response.data;
  let user = {
    ...data,
    password: ''
  };
  return { type: PROFILE_EDITOR_FETCH_PROFILE_SUCCEED, user };
}

function fetchProfileFailed(response) {
  return { type: PROFILE_EDITOR_FETCH_PROFILE_FAILED };
}

export function saveProfile() {
  return (dispatch, getState) => {
    dispatch({ type: PROFILE_EDITOR_SAVE_PROFILE });

    let user = _.get(getState(), 'profile.user');

    if (!validate(dispatch, getState)) return;

    let _user = _.pick(user, ['login', 'firstname', 'lastname', 'email']);
    let { id, password } = user;
    if (id) _user.id = id;
    if (password) _user.password = password;

    let params = {
      user: _user
    };

    apiV0.post(`profile/`, params)
    .then(response => {
      dispatch(saveProfileSucceed(response));
      dispatch(fetchCurrentUser());
    })
    .catch(response => {
      dispatch(saveProfileFailed(response));
    });
  }
}

function saveProfileSucceed(response) {
  return { type: PROFILE_EDITOR_SAVE_PROFILE_SUCCEED, user: response.data.user };
}

function saveProfileFailed(response) {
  return { type: PROFILE_EDITOR_SAVE_PROFILE_FAILED };
}

export function changeField(payload) {
  return (dispatch, getState) => {
    dispatch({ type: PROFILE_EDITOR_CHANGE_FIELD, ...payload });
    validate(dispatch, getState);
  }
}

function validate(dispatch, getState) {
  let user = _.get(getState(), 'profile.user');
  let _schema = Object.assign({}, schema);
  if (!user.id) {
    _schema.password = 'required';
  }
  let validation = new Validator(user, _schema);
  let passes = validation.passes();
  dispatch({ type: PROFILE_EDITOR_VALIDATE, errors: validation.errors });
  return passes;
}

export function reset() {
  return { type: PROFILE_EDITOR_RESET };
}
