import React, {
  Component as C
} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from 'src/login/services/store';
import browserHistory from 'src/login/services/history';
import LoginPage from 'src/login/containers/login/LoginPage';

import 'src/common/styles/index.scss';

injectTapEventPlugin();

class App extends C {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/"
                   component={LoginPage} />
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
