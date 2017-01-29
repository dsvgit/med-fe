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
      width: 70,
      marginLeft: 15
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
        style={styles.input}
        floatingLabelText="Белки"
        value={getValue(prot)}
        onChange={handleChange('prot')}
        onRequestValue={handleRequest('prot')}
        min={0}
        max={100}
        strategy="warn" />
      <NumberInput
        style={styles.input}
        floatingLabelText="Жиры"
        value={getValue(fats)}
        onChange={handleChange('fats')}
        onRequestValue={handleRequest('fats')}
        min={0}
        max={100}
        strategy="warn" />
      <NumberInput
        style={styles.input}
        floatingLabelText="Углеводы"
        value={getValue(carb)}
        onChange={handleChange('carb')}
        onRequestValue={handleRequest('carb')}
        min={0}
        max={100}
        strategy="warn" />
      <NumberInput
        style={styles.input}
        floatingLabelText="Калории"
        value={getValue(calories)}
        onChange={handleChange('calories')}
        onRequestValue={handleRequest('calories')}
        min={0}
        max={1000}
        strategy="warn" />
    </div>
  );
};
