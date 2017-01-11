import React from 'react';
import { connect } from 'react-redux';

import MainSidebar from 'src/common/components/sidebar/MainSidebar';
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
    handleListItemClick({url, title}) {
      history.replace(url);
    },
    handleLogout() {
      dispatch(logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSidebar);
