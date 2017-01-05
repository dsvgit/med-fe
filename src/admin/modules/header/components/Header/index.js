import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';

import MainHeader from 'src/admin/modules/framework/header/MainHeader';
import { appSidebarOpen } from 'src/admin/modules/sidebar/actions/appSidebarActions';

const AppSidebarDrawer = (props) => {
  return <MainHeader {...props} />
};

AppSidebarDrawer.propTypes = {};
AppSidebarDrawer.defaultProps = {};

let mapStateToProps = state => {
  return {
    title: state.app.title,
    currentUser: state.app.currentUser
  };
}

let mapDispatchToProps = dispatch => {
  return {
    onSidebarOpen() {
      dispatch(appSidebarOpen());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebarDrawer);
