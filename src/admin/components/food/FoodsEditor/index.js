import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { withRouter } from 'react-router';

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';


let FoodsEditor = props => {
  let {
    food: {
      title,
      prot,
      fats,
      carb,
      calories
      },
    errors,
    changeField,
    saveFood,
    goToOverview
    } = props;

  const styles = {
    block: {
      maxWidth: 250,
    }
  };

  let getError = field => errors.first && errors.first(field);

  return (
    <BaseLayout>
      <div style={styles.block}>
        <TextField
          floatingLabelText="Наименование"
          value={title}
          onChange={(e, v) => changeField({ name: 'title', value: v })}
          floatingLabelFixed={true}
          errorText={getError('title')}
        />
        <br />
        <TextField
          floatingLabelText="Белки"
          value={prot}
          onChange={(e, v) => changeField({ name: 'prot', value: v })}
          floatingLabelFixed={true}
          errorText={getError('prot')}
        /><br />
        <TextField
          floatingLabelText="Жиры"
          value={fats}
          onChange={(e, v) => changeField({ name: 'fats', value: v })}
          floatingLabelFixed={true}
          errorText={getError('fats')}
        />
        <br />
        <TextField
          floatingLabelText="Углеводы"
          value={carb}
          onChange={(e, v) => changeField({ name: 'carb', value: v })}
          floatingLabelFixed={true}
          errorText={getError('carb')}
        />
        <br />
        <TextField
          floatingLabelText="Калории"
          value={calories}
          onChange={(e, v) => changeField({ name: 'calories', value: v })}
          floatingLabelFixed={true}
          errorText={getError('calories')}
        />
      </div>
      <br/>
      <RaisedButton
        label="Сохранить"
        primary={true}
        onClick={saveFood}
        className="action-button"
      />
      <RaisedButton
        label="Назад"
        secondary={true}
        onClick={goToOverview}
        className="action-button"
      />
    </BaseLayout>
  );
};

export default withRouter(FoodsEditor);
