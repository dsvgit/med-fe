import React, {
  Component as C
} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';

import store from 'src/admin/service/store';
import sidebarItems from 'src/admin/modules/sidebar/constants/sidebarItems';
import browserHistory from 'src/admin/service/history';
import BaseLayout from 'src/admin/modules/framework/layouts/BaseLayout';
import LoginPage from 'src/admin/modules/login/components/LoginPage';
import DashboardOverview from 'src/admin/modules/dashboard/components/dashboardOverview';
import UsersOverview from 'src/admin/modules/users/components/usersOverview';
import UserEditor from 'src/admin/modules/users/components/userEditor';
import FoodOverview from 'src/admin/modules/food/components/foodOverview';

import { setAppTitle, fetchCurrentUser } from 'src/admin/modules/app/actions/appActions';
import { fetchUsers } from 'src/admin/modules/users/actions/usersActions';
import { fetchUserEditor, resetUserEditor } from 'src/admin/modules/users/actions/userEditorActions';
import { resetLogin } from 'src/admin/modules/login/actions/loginPageActions';
import { appSidebarClose } from 'src/admin/modules/sidebar/actions/appSidebarActions';

import 'src/common/styles/index.scss';

injectTapEventPlugin();

class App extends C {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
          <Router history={browserHistory}
                  onUpdate={() => {
                    if (store.getState().app.currentUser == null &&
                    sessionStorage.getItem('authToken')) {
                      store.dispatch(fetchCurrentUser());
                    }
                  }}>
            <Route  path="/"
                    component={DashboardOverview}
                    onEnter={() => {
                      store.dispatch(setAppTitle(DashboardOverview.sidebarItem.title));
                    }} />
            <Route  path="/users"
                    component={UsersOverview}
                    onEnter={() => {
                    store.dispatch(setAppTitle(UsersOverview.sidebarItem.title));
                    store.dispatch(fetchUsers());
                  }} />
            <Route  path="/user/new"
                    component={UserEditor}
                    onEnter={(nextState) => {
                    store.dispatch(resetUserEditor());
                    store.dispatch(setAppTitle('Создание пользователя'));
                  }} />
            <Route  path="/user/:id"
                    component={UserEditor}
                    onEnter={(nextState) => {
                    store.dispatch(resetUserEditor());
                    store.dispatch(setAppTitle('Редактирование пользователя'));
                    store.dispatch(fetchUserEditor(nextState.params.id));
                  }} />
            <Route  path="/food"
                    component={FoodOverview}
                    onEnter={() => {
                    store.dispatch(setAppTitle(FoodOverview.sidebarItem.title));
                  }} />
            <Route path="/login"
                   component={LoginPage}
                   onEnter={(nextState) => {
                  store.dispatch(appSidebarClose());
                  store.dispatch(resetLogin());
                }}/>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('wrap')
);
