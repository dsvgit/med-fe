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

import store from 'src/admin/services/store';
import browserHistory from 'src/admin/services/history';
import DashboardOverview from 'src/admin/containers/dashboard/DashboardOverview';
import UsersOverview from 'src/admin/containers/users/UsersOverview';
import UsersEditor from 'src/admin/containers/users/editor/UsersEditor';
import FoodsOverview from 'src/admin/containers/food/FoodsOverview';
import FoodsEditor from 'src/admin/containers/food/FoodsEditor';
import ManageOverview from 'src/admin/containers/manage/ManageOverview';

import { fetchCurrentUser } from 'src/admin/actions/app';
import 'src/common/favicon/favicon.png';

import 'src/common/styles/index.scss';


injectTapEventPlugin();

class App extends C {
  componentWillMount() {
    store.dispatch(fetchCurrentUser());
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/"
                   component={DashboardOverview} />
            <Route path="/users"
                   component={UsersOverview}/>
            <Route path="/user/new"
                   component={UsersEditor} />
            <Route path="/user/:userId"
                   component={UsersEditor} />
            <Route path="/food"
                   component={FoodsOverview} />
            <Route path="/food/new"
                   component={FoodsEditor} />
            <Route path="/food/:foodId"
                   component={FoodsEditor} />
            <Route path="/manage"
                   component={ManageOverview} />
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
