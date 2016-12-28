import React, {
  PropTypes,
} from 'react';

import MainSidebar from 'src/admin/modules/framework/sidebar/MainSidebar';
import MainHeader from 'src/admin/modules/framework/header/MainHeader';
import Paper from 'material-ui/Paper';

import './index.scss';

const BaseLayout = (props) => {
  let { children } = props;

  return (
    <div>
      <MainSidebar />
      <MainHeader />
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
