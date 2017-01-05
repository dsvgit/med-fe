import React, {
  PropTypes,
} from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

import './index.scss';

const MainHeader = (props) => {
  let { onSidebarOpen, title, currentUser } = props;

  return (
    <Toolbar className='header'>
      <ToolbarGroup firstChild={true} className='left-toolbar-group'>
        <IconButton iconStyle={{ color: 'white' }}
                    onClick={onSidebarOpen}
                    className="header-open-sidebar-button">
          <NavigationMenu />
        </IconButton>
        <h3 className="header-title">{title}</h3>
      </ToolbarGroup>
      <ToolbarGroup firstChild={true}>
        <h3 className="header-title">{currentUser && currentUser.username}</h3>
      </ToolbarGroup>
    </Toolbar>
  );
};

MainHeader.propTypes = {};
MainHeader.defaultProps = {};

export default MainHeader;
