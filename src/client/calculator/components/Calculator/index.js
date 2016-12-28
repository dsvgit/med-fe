import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import _ from 'lodash'

import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List'
import Delete from 'material-ui/svg-icons/action/delete'

import foods from './data.js'

import styles from './index.scss'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
  }

  getDefaultState() {
    return {
      foods: foods,
      selectedFood: null,
      amount: 10,
      addedFoods: [

      ]
    };
  }

  onNewRequest(food) {
    this.setState({
      selectedFood: food
    });
  }

  onChangeAmount(e, _value) {
    let value = parseInt(_value);
    if (value < 0) return;
    this.setState({
      amount: parseInt(value)
    });
  }

  handleAdd() {
    if (!this.state.selectedFood) {
      return;
    }
    this.setState({
      addedFoods: [
        ...this.state.addedFoods,
        {
          ...this.state.selectedFood,
          calories: this.getValue(this.state.selectedFood, 'calories'),
          prot: this.getValue(this.state.selectedFood, 'prot'),
          fats: this.getValue(this.state.selectedFood, 'fats'),
          carb: this.getValue(this.state.selectedFood, 'carb')
        }
      ]
    });
    this.resetValues();
  }

  handleRemove(id) {
    let addedFoods = this.state.addedFoods.slice();
    _.remove(addedFoods, food => food.id == id);
    this.setState({ addedFoods });
  }

  resetValues() {
    this.setState({
      ..._.pick(this.getDefaultState(), 'selectedFood', 'amount')
    });
  }

  getValue(source, name) {
    if (!source) return 0;
    return (source[name] * this.state.amount) || 0;
  }

  getMainValue(name) {
    let values = _.map(this.state.addedFoods, name);
    let sum = _.reduce(values, (current, prev) => current + prev, 0);
    return sum;
  }

  render() {

    const dataSourceConfig = {
      text: 'title',
      value: 'id',
    };

    return <div className={styles.content}>
      <header className={styles.header}>
        <h2>Контроль каллорий</h2>
      </header>
      <Paper className={styles.paper} zDepth={1}>
        <div className={styles.planTitle}>Выполенение плана по еде: </div>
        <div className={styles.cards}>
          <Paper className={styles.mainCard}>
            <div className={styles.cardTitle}>Каллории</div>
            <div className={styles.cardValue}>{this.getMainValue('calories')}</div>
          </Paper>

          <Paper className={styles.mainCard}>
            <div className={styles.cardTitle}>Белки</div>
            <div className={styles.cardValue}>{this.getMainValue('prot')}</div>
          </Paper>

          <Paper className={styles.mainCard}>
            <div className={styles.cardTitle}>Жиры</div>
            <div className={styles.cardValue}>{this.getMainValue('fats')}</div>
          </Paper>

          <Paper className={styles.mainCard}>
            <div className={styles.cardTitle}>Углеводы</div>
            <div className={styles.cardValue}>{this.getMainValue('carb')}</div>
          </Paper>
        </div>
      </Paper>
      <Paper className={styles.paper} zDepth={1}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <AutoComplete
              floatingLabelFixed={true}
              floatingLabelText="Продукт"
              filter={AutoComplete.caseInsensitiveFilter}
              openOnFocus={true}
              dataSource={this.state.foods}
              maxSearchResults={20}
              dataSourceConfig={dataSourceConfig}
              onNewRequest={this.onNewRequest.bind(this)}
            />
          </div>
          <div className={classnames(styles.control, styles.amount)}>
            <TextField
              style={{ width: 110 }}
              type="number"
              onChange={this.onChangeAmount.bind(this)}
              value={this.state.amount}
              floatingLabelFixed={true}
              floatingLabelText="Количество, г"
            />
          </div>
        </div>

        <div className={styles.cardsTitle}>Показатели продукта:</div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Каллории</div>
            <div className={styles.cardValue}>{this.getValue(this.state.selectedFood, 'calories')}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Белки</div>
            <div className={styles.cardValue}>{this.getValue(this.state.selectedFood, 'prot')}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Жиры</div>
            <div className={styles.cardValue}>{this.getValue(this.state.selectedFood, 'fats')}</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Углеводы</div>
            <div className={styles.cardValue}>{this.getValue(this.state.selectedFood, 'carb')}</div>
          </div>
        </div>

        <RaisedButton
          label="Добавить продукт"
          primary
          onClick={this.handleAdd.bind(this)}
        />

        <List style={{width: 400}}>
          {this.state.addedFoods.map((food, index) => {
            let text = (
              <div>
                <span className={styles.mainText}>{food.title},</span>
                <span className={styles.minText}>
                  {food.calories}/
                  {food.prot}/
                  {food.fats}/
                  {food.carb}
                </span>
              </div>
            );

            return <ListItem key={index}
                             primaryText={text}
                             rightIcon={<Delete onClick={this.handleRemove.bind(this, food.id)}/>}/>
          })}
        </List>
      </Paper>
    </div>
  }
}
