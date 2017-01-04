import _ from 'lodash';
import DashboardOverview from 'src/admin/modules/dashboard/components/dashboardOverview';
import UsersOverview from 'src/admin/modules/users/components/usersOverview';
import FoodOverview from 'src/admin/modules/food/components/foodOverview';

export default _.map([
  DashboardOverview,
  UsersOverview,
  FoodOverview
], 'sidebarItem');
