import React, {
  PropTypes,
} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import MapsRestrount from 'material-ui/svg-icons/maps/restaurant';
import history from 'src/admin/service/history';

import './index.scss';

const MainSidebar = (props) => {
  let handleClick = url => {
    history.replace(url);
  }

  return (
    <div className="sidebar">
      <List>
        <ListItem
          primaryText="Главная"
          leftIcon={<ActionHome />}
          onClick={handleClick.bind(null, '/')} />
        <ListItem
          primaryText="Пользователи"
          leftIcon={<ActionSupervisorAccount />}
          onClick={handleClick.bind(null, '/users')} />
        <ListItem
          primaryText="Продукты"
          leftIcon={<MapsRestrount />}
          onClick={handleClick.bind(null, '/food')}/>
      </List>
      <Divider inset={true} />
      <List>
        <ListItem primaryText="Выход" leftIcon={<MapsRestrount style={{opacity: 0}} />} />
      </List>
    </div>
  );
};

MainSidebar.propTypes = {};
MainSidebar.defaultProps = {};

export default MainSidebar;
