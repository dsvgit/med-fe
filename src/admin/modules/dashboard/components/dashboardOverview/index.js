import React, {
  PropTypes,
} from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';

import BaseLayout from 'src/admin/modules/framework/layouts/BaseLayout';

const DashboardOverview = (props) => {
  return (
    <BaseLayout>
      <div>
        <span>Для начала работы выбирете нужный пункт меню в сайдбаре.</span>
      </div>
    </BaseLayout>
  );
};

DashboardOverview.propTypes = {};
DashboardOverview.defaultProps = {};
DashboardOverview.sidebarItem = {
  id: 'dashboard',
  title: 'Главная',
  icon: <ActionHome />,
  url: '/'
};

export default DashboardOverview;
