import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { createRouteAction } from './router/actions'
import store from './app/store'
import Calculator from './calculator/components/Calculator'

import './common-styles/font-roboto.scss'
import 'reset-css/_reset.scss'
import './index.scss'

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Calculator}></Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('wrap')
);
