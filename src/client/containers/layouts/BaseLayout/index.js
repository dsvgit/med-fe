import React from 'react';

import BaseLayout from 'src/common/components/layouts/BaseLayout';
import Sidebar from 'src/client/containers/sidebar/Sidebar';
import SidebarDrawer from 'src/client/containers/sidebar/SidebarDrawer';
import Header from 'src/client/containers/header/Header';

export default props => {
  return <BaseLayout {...props}
                     sidebar={<Sidebar />}
                     sidebarDrawer={<SidebarDrawer />}
                     header={<Header />} />
}
