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

import store from 'src/client/services/store';
import browserHistory from 'src/client/services/history';
import DashboardOverview from 'src/client/containers/dashboard/DashboardOverview';
import FoodsOverview from 'src/client/containers/food/FoodsOverview';
import FoodsEditor from 'src/client/containers/food/FoodsEditor';
import ProfileEditor from 'src/client/containers/profile/ProfileEditor';
import Calculator from 'src/client/containers/calculator/Calculator';

import { fetchCurrentUser } from 'src/client/actions/app';

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
            <Route path="/food"
                   component={FoodsOverview} />
            <Route path="/food/new"
                   component={FoodsEditor} />
            <Route path="/food/:foodId"
                   component={FoodsEditor} />
            <Route path="/profile"
                   component={ProfileEditor} />
            <Route path="/calc"
                   component={Calculator} />
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
