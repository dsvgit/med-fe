import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';

import store from 'src/admin/service/store';
import browserHistory from 'src/admin/service/history';
import BaseLayout from 'src/admin/modules/framework/layouts/BaseLayout'
import DashboardOverview from 'src/admin/modules/dashboard/components/dashboardOverview';
import UsersOverview from 'src/admin/modules/users/components/usersOverview';
import FoodOverview from 'src/admin/modules/food/components/foodOverview';

import { setAppTitle } from 'src/admin/modules/app/actions/appActions';

import 'src/common/styles/index.scss';

injectTapEventPlugin();

let sidebarItems = _.map([
  DashboardOverview,
  UsersOverview,
  FoodOverview
], 'sidebarItem');

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Provider store={store}>
      <BaseLayout sidebarItems={sidebarItems}>
        <Router history={browserHistory}>
          <Route  path="/"
                  component={DashboardOverview}
                  onEnter={() => {
                    store.dispatch(setAppTitle(DashboardOverview.sidebarItem.title));
                  }} />
          <Route  path="/users"
                  component={UsersOverview}
                  onEnter={() => {
                    store.dispatch(setAppTitle(UsersOverview.sidebarItem.title));
                  }} />
          <Route  path="/food"
                  component={FoodOverview}
                  onEnter={() => {
                    store.dispatch(setAppTitle(FoodOverview.sidebarItem.title));
                  }} />
        </Router>
      </BaseLayout>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('wrap')
);
