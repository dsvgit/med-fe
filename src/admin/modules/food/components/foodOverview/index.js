import React, {
  PropTypes,
} from 'react';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';

import BaseLayout from 'src/admin/modules/framework/layouts/BaseLayout';

const FoodOverview = (props) => {
  return (
    <BaseLayout>
      <div>Food list</div>
    </BaseLayout>
  );
};

FoodOverview.propTypes = {};
FoodOverview.defaultProps = {};
FoodOverview.sidebarItem = {
  id: 'food',
  title: 'Продукты',
  icon: <MapsRestaurant />,
  url: '/food'
};

export default FoodOverview;
