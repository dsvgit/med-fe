import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from 'src/admin/service/store';
import browserHistory from 'src/admin/service/history';
import BaseLayout from 'src/admin/modules/framework/layouts/BaseLayout'
import DashboardOverview from 'src/admin/modules/dashboard/components/dashboardOverview';
import UsersOverview from 'src/admin/modules/users/components/usersOverview';
import FoodOverview from 'src/admin/modules/food/components/foodOverview';

import 'src/common/styles/index.scss';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Provider store={store}>
      <BaseLayout>
        <Router history={browserHistory}>
          <Route path="/" component={DashboardOverview}></Route>
          <Route path="/users" component={UsersOverview}></Route>
          <Route path="/food" component={FoodOverview}></Route>
        </Router>
      </BaseLayout>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('wrap')
);
