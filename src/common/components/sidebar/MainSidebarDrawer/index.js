import React, {
  PropTypes,
} from 'react';
import classnames from 'classnames';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import './index.scss';


export default props => {
  let { items, open, onClose, handleListItemClick, handleLogout } = props;

  let itemsComponent = items.map(item => (
    <ListItem
      key={item.id}
      primaryText={item.title}
      leftIcon={item.icon}
      onClick={handleListItemClick.bind(null, {url: item.url, title: item.title})}
    />
  ));

  let handleClose = () => {
    onClose();
  }

  let overlayClass = classnames('sidebar-overlay', {
    open: open
  });

  return (
    <div className="sidebar-drawer">
      <Drawer open={open}>
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
      </Drawer>
      <div  className={overlayClass}
            onClick={handleClose} />
    </div>
  );
};
