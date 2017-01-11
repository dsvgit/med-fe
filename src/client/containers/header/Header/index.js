import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';

import MainHeader from 'src/common/components/header/MainHeader';
import { openSidebar } from 'src/client/actions/app';


let mapStateToProps = state => {
  return {
    title: state.app.title,
    currentUser: state.app.currentUser
  };
}

let mapDispatchToProps = dispatch => {
  return {
    onSidebarOpen() {
      dispatch(openSidebar());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
