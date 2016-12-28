import React, {
  PropTypes,
} from 'react';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';

const FoodOverview = (props) => {
  return (
    <div>Food list</div>
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
