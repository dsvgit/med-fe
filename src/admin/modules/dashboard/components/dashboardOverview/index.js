import React, {
  PropTypes,
} from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';

const DashboardOverview = (props) => {
  return (
    <div>
      <span>Для начала работы выбирете нужный пункт меню в сайдбаре.</span>
    </div>
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
