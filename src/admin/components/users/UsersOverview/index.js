import React, {
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

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

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';
import PagiFooter from 'src/common/components/table/PagiFooter';

import './index.scss';


export default props => {
  let {
    users,
    total,
    page,
    pageSize,
    goToCreate,
    handleDelete,
    handleSelect,
    getNextPageData,
    getPrevPageData,
    fetchUsers
    } = props;

  let showCheckboxes = true;
  let enableSelectAll = true;
  let deselectOnClickaway = false;

  let onPageClick = (type) => {
    if (type == 'next') {
      getNextPageData();
    } else if (type == 'prev') {
      getPrevPageData();
    }
  }

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
          onClick={handleDelete}
        />
        <Table onRowSelection={ids => handleSelect(_.map(_.pick(users, ids), '_id'))}>
          <TableHeader
            displaySelectAll={showCheckboxes}
            adjustForCheckbox={showCheckboxes}
            enableSelectAll={enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn>Логин</TableHeaderColumn>
              <TableHeaderColumn>Имя</TableHeaderColumn>
              <TableHeaderColumn>Почта</TableHeaderColumn>
              <TableHeaderColumn>Администратор</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={showCheckboxes}
                      deselectOnClickaway={deselectOnClickaway} >
            {users.map(row => {
              let {
                _id: id,
                firstname,
                lastname,
                isAdmin,
                email
                } = row;

              return (
                <TableRow key={id}
                          selected={false}
                          rowNumber={id}>
                  <TableRowColumn>
                    <Link to={`/user/${id}`}>
                      {row.login}
                    </Link>
                  </TableRowColumn>
                  <TableRowColumn>{`${firstname} ${lastname}`}</TableRowColumn>
                  <TableRowColumn>{email}</TableRowColumn>
                  <TableRowColumn>
                    <Checkbox
                      checked={isAdmin}
                      disabled={true}
                    />
                  </TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
          <TableFooter adjustForCheckbox={showCheckboxes}>
            <TableRow>
              <TableRowColumn colSpan="4" style={{textAlign: 'center', verticalAlign: 'middle', paddingRight: 74}}>
                <PagiFooter
                  page={page}
                  total={total}
                  pageSize={pageSize}
                  onPageClick={onPageClick}
                />
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </BaseLayout>
  );
};
