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
    input: {
      width: 160,
      marginLeft: 15
    }
  };

  let handleChange = (name) => {
    return (e, v) => changeField({ name, value: v })
  }

  let handleRequest = (name) => {
    return (v) => changeField({ name, value: v })
  }

  let max = 999999;

  return (
    <div>
      <NumberInput
        style={styles.input}
        floatingLabelText="Белки, г/100г"
        value={getValue(prot)}
        onChange={handleChange('prot')}
        onRequestValue={handleRequest('prot')}
        min={0}
        max={max}
        strategy="warn" />
      <NumberInput
        style={styles.input}
        floatingLabelText="Жиры, г/100г"
        value={getValue(fats)}
        onChange={handleChange('fats')}
        onRequestValue={handleRequest('fats')}
        min={0}
        max={max}
        strategy="warn" />
      <NumberInput
        style={styles.input}
        floatingLabelText="Углеводы, г/100г"
        value={getValue(carb)}
        onChange={handleChange('carb')}
        onRequestValue={handleRequest('carb')}
        min={0}
        max={max}
        strategy="warn" />
      <NumberInput
        style={styles.input}
        floatingLabelText="Калории, ккал/100г"
        value={getValue(calories)}
        onChange={handleChange('calories')}
        onRequestValue={handleRequest('calories')}
        min={0}
        max={max}
        strategy="warn" />
    </div>
  );
};
