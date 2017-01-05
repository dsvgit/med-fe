import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconButton from 'material-ui/IconButton';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import {
  Toolbar,
  ToolbarGroup
} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import history from 'src/admin/service/history';
import BaseLayout from 'src/admin/modules/framework/layouts/BaseLayout';
import { usersSelect, deleteUsers } from '../../actions/usersActions';

import './index.scss';


const UsersOverview = (props) => {
  let {
    users,
    goToCreate,
    deleteUsers,
    usersSelect
    } = props;

  let showCheckboxes = true;
  let enableSelectAll = true;
  let deselectOnClickaway = false;

  return (
    <BaseLayout>
      <div>
        <RaisedButton
          label="Добавить"
          primary={true}
          onClick={goToCreate}
          className="toolbar-button"
        />
        <RaisedButton
          label="Удалить"
          secondary={true}
          onClick={deleteUsers}
        />
        <Table onRowSelection={ids => usersSelect(_.map(_.pick(users, ids), 'id'))}>
          <TableHeader
            displaySelectAll={showCheckboxes}
            adjustForCheckbox={showCheckboxes}
            enableSelectAll={enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn>Имя</TableHeaderColumn>
              <TableHeaderColumn>Почта</TableHeaderColumn>
              <TableHeaderColumn>Администратор</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={showCheckboxes}
                      deselectOnClickaway={deselectOnClickaway} >
            {users.map(row => (
              <TableRow key={row.id}
                        selected={false}
                        rowNumber={row.id}>
                <TableRowColumn>
                  <Link to={`/user/${row.id}`}>
                    {row.username}
                  </Link>
                </TableRowColumn>
                <TableRowColumn>{row.email}</TableRowColumn>
                <TableRowColumn>
                  <Checkbox
                    checked={row.is_superuser}
                    disabled={true}
                  />
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </BaseLayout>
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

let mapStateToProps = state => {
  return {
    users: state.users.data
  };
}

let mapDispatchToProps = dispatch => {
  return {
    goToCreate() {
      history.replace('/user/new');
    },
    usersSelect(ids) {
      dispatch(usersSelect(ids));
    },
    deleteUsers(ids) {
      dispatch(deleteUsers(ids));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersOverview);
