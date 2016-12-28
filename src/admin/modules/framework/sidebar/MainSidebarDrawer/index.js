import React, {
  PropTypes,
} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const MainSidebar = (props) => {
  return (
    <Drawer open={true}>
      <MenuItem>Пользователи</MenuItem>
      <MenuItem>Продукты</MenuItem>
      <MenuItem>Выход</MenuItem>
    </Drawer>
  );
};

MainSidebar.propTypes = {};
MainSidebar.defaultProps = {};

export default MainSidebar;
