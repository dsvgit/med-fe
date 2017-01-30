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
import ActionLockOpen from 'material-ui/svg-icons/action/lock-open';

import { BaseLayout } from 'src/common/services/config';
import PagiFooter from 'src/common/components/table/PagiFooter';

import './index.scss';


export default props => {
  let {
    foods,
    total,
    page,
    pageSize,
    goToCreate,
    handleDelete,
    handleSelect,
    getNextPageData,
    getPrevPageData,
    changeField,
    search
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
      <div id="foods-overview">
        <RaisedButton
          label="Добавить"
          primary={true}
          onClick={goToCreate}
          className="action-button"
        />
        <RaisedButton
          label="Удалить"
          secondary={true}
          onClick={handleDelete}
        />
        <TextField
          placeholder="Поиск"
          style={{ marginLeft: 15, width: 'auto' }}
          value={search}
          onChange={(e, v) => changeField({ name: 'search', value: v })}
          floatingLabelFixed={true}
        />
        <Table onRowSelection={ids => handleSelect(_.map(_.pick(foods, ids), '_id'))}>
          <TableHeader
            displaySelectAll={showCheckboxes}
            adjustForCheckbox={showCheckboxes}
            enableSelectAll={enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn>Наименование</TableHeaderColumn>
              <TableHeaderColumn className="normal-column number-column">
                Б
                <span className="hint-text">, г/100г</span>
              </TableHeaderColumn>
              <TableHeaderColumn className="normal-column number-column">
                Ж
                <span className="hint-text">, г/100г</span>
              </TableHeaderColumn>
              <TableHeaderColumn className="normal-column number-column">
                У
                <span className="hint-text">, г/100г</span>
              </TableHeaderColumn>
              <TableHeaderColumn className="normal-column number-column">
                К
                <span className="hint-text">, ккал/100г</span>
              </TableHeaderColumn>
              <TableHeaderColumn className="tablet-column summary-column">
                Б/Ж/У/К
                <span className="hint-text">, ккал/100г</span>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={showCheckboxes}
                      deselectOnClickaway={deselectOnClickaway} >
            {foods.map(row => {
              let {
                _id: id,
                title,
                prot,
                fats,
                carb,
                calories
                } = row;

              return (
                <TableRow key={id}
                          selected={false}
                          rowNumber={id}>
                  <TableRowColumn>
                    <Link to={`/food/${id}`}>
                      {row.title}
                    </Link>
                  </TableRowColumn>
                  <TableRowColumn className="normal-column number-column">{prot}</TableRowColumn>
                  <TableRowColumn className="normal-column number-column">{fats}</TableRowColumn>
                  <TableRowColumn className="normal-column number-column">{carb}</TableRowColumn>
                  <TableRowColumn className="normal-column number-column">{calories}</TableRowColumn>
                  <TableRowColumn className="tablet-column summary-column">{`${prot}/${fats}/${carb}/${calories}`}</TableRowColumn>
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
