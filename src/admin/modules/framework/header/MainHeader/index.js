import React, {
  PropTypes,
} from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

import './index.scss';

const MainHeader = (props) => {
  return (
    <Toolbar className='header'>
      <ToolbarGroup firstChild={true} className='left-toolbar-group'>
        <IconButton iconStyle={{ color: 'white' }} style={{display: 'none'}} >
          <NavigationMenu />
        </IconButton>
        <h3 className="header-title">Информация</h3>
      </ToolbarGroup>
      <ToolbarGroup firstChild={true}>
      </ToolbarGroup>
    </Toolbar>
  );
};

MainHeader.propTypes = {};
MainHeader.defaultProps = {};

export default MainHeader;
