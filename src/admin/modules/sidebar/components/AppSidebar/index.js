import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';

import MainSidebar from 'src/admin/modules/framework/sidebar/MainSidebar';
import { appSidebarClose } from 'src/admin/modules/sidebar/actions/appSidebarActions';
import history from 'src/admin/service/history';

const AppSidebar = (props) => {
  return <MainSidebar {...props} />
};

AppSidebar.propTypes = {};
AppSidebar.defaultProps = {};

let mapStateToProps = state => {
  return {
    open: state.appSidebar.open,
  };
}

let mapDispatchToProps = dispatch => {
  return {
    handleListItemClick({url, title}) {
      history.replace(url);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
