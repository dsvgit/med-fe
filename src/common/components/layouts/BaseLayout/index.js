import React from 'react';
import Paper from 'material-ui/Paper';

import './index.scss';


export default props => {
  let {
    children,
    sidebar,
    sidebarDrawer = sidebar,
    header
    } = props;

  return (
    <div>
      {sidebar}
      {sidebarDrawer}
      {header}
      <div className="base-layout-content">
        <Paper className="base-layout-paper" zDepth={1}>
          {children}
        </Paper>
      </div>
    </div>
  );
};
