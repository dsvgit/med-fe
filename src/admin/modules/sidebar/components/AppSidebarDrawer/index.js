import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';

import MainSidebarDrawer from 'src/admin/modules/framework/sidebar/MainSidebarDrawer';
import { appSidebarClose } from 'src/admin/modules/sidebar/actions/appSidebarActions';
import { setAppTitle } from 'src/admin/modules/app/actions/appActions';
import history from 'src/admin/service/history';

const AppSidebarDrawer = (props) => {
  return <MainSidebarDrawer {...props} />
};

AppSidebarDrawer.propTypes = {};
AppSidebarDrawer.defaultProps = {};

let mapStateToProps = state => {
  return {
    open: state.appSidebar.open,
  };
}

let mapDispatchToProps = dispatch => {
  return {
    onClose() {
      dispatch(appSidebarClose());
    },
    handleListItemClick({url, title}) {
      history.replace(url);
      dispatch(appSidebarClose());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebarDrawer);
