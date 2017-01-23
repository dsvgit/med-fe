import React from 'react';
import NumberInput from 'material-ui-number-input';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import BaseLayout from 'src/admin/containers/layouts/BaseLayout';


export default props => {
  let {
    card: {
      prot,
      fats,
      carb,
      calories
      },
    changeField
    } = props;

  let getValue = v => {
    return ''+v;
  }

  const styles = {
    block: {
      maxWidth: 250,
    }
  };

  let handleChange = (name) => {
    return (e, v) => changeField({ name, value: v })
  }

  let handleRequest = (name) => {
    return (v) => changeField({ name, value: v })
  }

  return (
    <div>
      <NumberInput
        floatingLabelText="Белки"
        value={getValue(prot)}
        onChange={handleChange('prot')}
        onRequestValue={handleRequest('prot')}
        min={0}
        max={120}
        strategy="warn" />
      <br />
      <NumberInput
        floatingLabelText="Жиры"
        value={getValue(fats)}
        onChange={handleChange('fats')}
        onRequestValue={handleRequest('fats')}
        min={0}
        max={120}
        strategy="warn" />
      <br />
      <NumberInput
        floatingLabelText="Углеводы"
        value={getValue(carb)}
        onChange={handleChange('carb')}
        onRequestValue={handleRequest('carb')}
        min={0}
        max={120}
        strategy="warn" />
      <br />
      <NumberInput
        floatingLabelText="Калории"
        value={getValue(calories)}
        onChange={handleChange('calories')}
        onRequestValue={handleRequest('calories')}
        min={0}
        max={120}
        strategy="warn" />
    </div>
  );
};
