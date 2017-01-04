import React, {
  PropTypes,
} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import './index.scss';


const MainSidebar = (props) => {
  let { items, handleListItemClick, handleLogout } = props;

  let itemsComponent = items.map(item => (
    <ListItem
      key={item.id}
      primaryText={item.title}
      leftIcon={item.icon}
      onClick={handleListItemClick.bind(null, {url: item.url, title: item.title})}
    />
  ));

  return (
    <div className="sidebar">
      <List>
        {itemsComponent}
      </List>
      <Divider inset={true} />
      <List>
        <ListItem
          primaryText="Выход"
          leftIcon={<i style={{opacity: 0}} />}
          onClick={handleLogout} />
      </List>
    </div>
  );
};

MainSidebar.propTypes = {};
MainSidebar.defaultProps = {};

export default MainSidebar;
