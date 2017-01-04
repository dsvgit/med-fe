import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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

import history from 'src/admin/service/history';
import BaseLayout from 'src/admin/modules/framework/layouts/BaseLayout';


const UsersOverview = (props) => {
  let {
    goToCreate
    } = props;

  let showCheckboxes = false;
  let enableSelectAll = true;

  return (
    <BaseLayout>
      <div>
        <RaisedButton
          label="Добавить"
          primary={true}
          onClick={goToCreate}
        />
        <Table>
          <TableHeader
            displaySelectAll={showCheckboxes}
            adjustForCheckbox={showCheckboxes}
            enableSelectAll={enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn>Имя</TableHeaderColumn>
              <TableHeaderColumn>Почта</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={showCheckboxes}>
            {props.users.map(row => (
              <TableRow key={row.id} selected={false}>
                <TableRowColumn>
                  <Link to={`/user/${row.id}`}>
                    {row.username}
                  </Link>
                </TableRowColumn>
                <TableRowColumn>{row.email}</TableRowColumn>
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
    users: state.users,
  };
}

let mapDispatchToProps = dispatch => {
  return {
    goToCreate() {
      history.replace('/user/new');
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersOverview);
