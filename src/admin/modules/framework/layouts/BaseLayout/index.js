import React, {
  PropTypes,
} from 'react';
import Paper from 'material-ui/Paper';

import Header from 'src/admin/modules/header/components/Header';
import AppSidebar from 'src/admin/modules/sidebar/components/AppSidebar';
import AppSidebarDrawer from 'src/admin/modules/sidebar/components/AppSidebarDrawer';
import sidebarItems from 'src/admin/modules/sidebar/constants/sidebarItems';

import './index.scss';

const BaseLayout = (props) => {
  let { children } = props;

  return (
    <div>
      <AppSidebar items={sidebarItems} />
      <AppSidebarDrawer items={sidebarItems} />
      <Header />
      <div className="base-layout-content">
        <Paper className="base-layout-paper" zDepth={1}>
          {children}
        </Paper>
      </div>
    </div>
  );
};

BaseLayout.propTypes = {};
BaseLayout.defaultProps = {};

export default BaseLayout;
