import login from 'src/login/reducers/login';

export default (state = {}, action) => {
  return {
    login: login(state.login, action)
  };
}
