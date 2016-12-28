import appSidebarReducer from 'src/admin/modules/sidebar/reducers/appSidebarReducer';
import appReducer from 'src/admin/modules/app/reducers/appReducer';

export default (state = {}, action) => {
  return {
    app: appReducer(state.app, action),
    appSidebar: appSidebarReducer(state.appSidebar, action),
  };
}
