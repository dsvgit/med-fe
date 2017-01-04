import appSidebarReducer from 'src/admin/modules/sidebar/reducers/appSidebarReducer';
import appReducer from 'src/admin/modules/app/reducers/appReducer';
import usersReducer from 'src/admin/modules/users/reducers/usersReducer';
import userEditorReducer from 'src/admin/modules/users/reducers/userEditorReducer';
import loginPageReducer from 'src/admin/modules/login/reducers/loginPageReducer';

export default (state = {}, action) => {
  return {
    app: appReducer(state.app, action),
    appSidebar: appSidebarReducer(state.appSidebar, action),
    users: usersReducer(state.users, action),
    user: userEditorReducer(state.user, action),
    loginPage: loginPageReducer(state.loginPage, action)
  };
}
