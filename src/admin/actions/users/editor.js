import _ from 'lodash';
import Validator from 'framework-validator';

import { apiV0 } from 'src/common/services/api';
import history from 'src/admin/services/history';
import {
  USERS_EDITOR_FETCH_USER,
  USERS_EDITOR_FETCH_USER_SUCCEED,
  USERS_EDITOR_FETCH_USER_FAILED,
  USERS_EDITOR_SAVE_USER,
  USERS_EDITOR_SAVE_USER_SUCCEED,
  USERS_EDITOR_SAVE_USER_FAILED,
  USERS_EDITOR_CHANGE_FIELD,
  USERS_EDITOR_CHANGE_TAB,
  USERS_EDITOR_VALIDATE,
  USERS_EDITOR_RESET
} from 'src/admin/actionTypes/users/editor';


var schema = {
  login: 'required|alpha_num',
  firstname: 'required|person_name',
  lastname: 'required|person_name',
  email: 'required|email'
};

export function fetchUser(id) {
  return dispatch => {
    dispatch({ type: USERS_EDITOR_FETCH_USER });

    apiV0.get(`user/${id}/`)
    .then(response => {
      dispatch(fetchUserSucceed(response));
    })
    .catch(response => {
      dispatch(fetchUserFailed(response));
      history.replace('/users');
    });
  }
}

function fetchUserSucceed(response) {
  let data = response.data;
  let user = {
    ...data.user,
    password: ''
  };
  let { card } = data;
  return { type: USERS_EDITOR_FETCH_USER_SUCCEED, user, card };
}

function fetchUserFailed(response) {
  return { type: USERS_EDITOR_FETCH_USER_FAILED };
}

export function saveUser() {
  return (dispatch, getState) => {
    dispatch({ type: USERS_EDITOR_SAVE_USER });

    let user = _.get(getState(), 'users.editor.user');

    if (!validate(dispatch, getState)) return;

    let _user = _.pick(user, ['login', 'firstname', 'lastname', 'email', 'isAdmin']);
    let { id, password } = user;
    if (id) _user.id = id;
    if (password) _user.password = password;

    let params = {
      user: _user
    };

    let savePromise;
    if (!user.id) {
      savePromise = apiV0.post(`user/`, params);
    } else {
      savePromise = apiV0.patch(`user/${user.id}/`, params);
    }

    savePromise
    .then(response => {
      let { user } = response.data;
      let { _id: id } = user;
      dispatch(saveUserSucceed(response));
      history.replace(`/user/${id}`);
    })
    .catch(response => {
      dispatch(saveUserFailed(response));
    });
  }
}

export function saveCard() {
  return (dispatch, getState) => {
    dispatch({type: USERS_EDITOR_SAVE_USER});

    let user = _.get(getState(), 'users.editor.user');
    let card = _.get(getState(), 'users.editor.card');

    if (!user.id) {
      return;
    }

    let params = {
      card: _.pick(card, ['prot', 'fats', 'carb', 'calories'])
    };
    apiV0.post(`card/${user.id}/`, params)
    .then(response => {
      dispatch(saveUserSucceed(response));
    })
    .catch(response => {
      dispatch(saveUserFailed(response));
    });
  }
}

function saveUserSucceed(response) {
  return { type: USERS_EDITOR_SAVE_USER_SUCCEED, user: response.data.user };
}

function saveUserFailed(response) {
  return { type: USERS_EDITOR_SAVE_USER_FAILED };
}

export function changeField(payload) {
  return (dispatch, getState) => {
    dispatch({ type: USERS_EDITOR_CHANGE_FIELD, ...payload });
    validate(dispatch, getState);
  }
}

export function changeTab(payload) {
  return { type: USERS_EDITOR_CHANGE_TAB, tab: payload }
}

export function goToOverview() {
  history.replace('/users');
}

function validate(dispatch, getState) {
  let user = _.get(getState(), 'users.editor.user');
  let _schema = Object.assign({}, schema);
  if (!user.id) {
    _schema.password = 'required';
  }
  let validation = new Validator(user, _schema);
  let passes = validation.passes();
  dispatch({ type: USERS_EDITOR_VALIDATE, errors: validation.errors });
  return passes;
}

export function reset() {
  return { type: USERS_EDITOR_RESET };
}
