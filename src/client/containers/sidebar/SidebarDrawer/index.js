import React from 'react';
import { connect } from 'react-redux';

import MainSidebarDrawer from 'src/common/components/sidebar/MainSidebarDrawer';
import { closeSidebar, logout } from 'src/client/actions/app';
import sidebarItems from '../sidebarItems';
import history from 'src/client/services/history';


let mapStateToProps = state => {
  return {
    open: state.app.sidebarOpened,
    items: sidebarItems
  };
}

let mapDispatchToProps = dispatch => {
  return {
    onClose() {
      dispatch(closeSidebar());
    },
    handleListItemClick({url, title}) {
      history.replace(url);
      dispatch(closeSidebar());
    },
    handleLogout() {
      dispatch(logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSidebarDrawer);
