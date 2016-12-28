import React, {
  PropTypes,
} from 'react';

import ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';

const UsersOverview = (props) => {
  return (
    <div>Users list</div>
  );
};

UsersOverview.propTypes = {};
UsersOverview.defaultProps = {};
UsersOverview.sidebarItem = {
  id: 'users',
  title: 'Пользователи',
  icon: <ActionSupervisorAccount />,
  url: '/users'
};

export default UsersOverview;
