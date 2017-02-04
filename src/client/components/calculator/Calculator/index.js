import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import _ from 'lodash'

import moment from 'framework-moment';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import {List, ListItem} from 'material-ui/List'
import Delete from 'material-ui/svg-icons/action/delete'

import BaseLayout from 'src/client/containers/layouts/BaseLayout';

import styles from './index.scss'


export default class extends React.Component {
  render() {
    let {
      card: {
        prot: cardProt,
        fats: cardFats,
        carb: cardCarb,
        calories: cardCalories
        },
      form: {
        selectedFood,
        amount
        },
      foods,
      changeField,
      addedFoods,
      addFood,
      removeFood,
      fetchAvailableFoods
      } = this.props;

    let handleAddFood = () => {
      this.refs.autocomplete.setState({ searchText: ''});
      addFood();
    }

    let getValue = (source, name) => {
      if (!source) return 0;
      return (parseInt(source[name] * amount)) || 0;
    }

    let changeAmount = (e, _value) => {
      let value = parseInt(_value);
      if (value < 0) return;
      changeField({ name: 'amount', value })
    }

    let getMainValue = name => {
      let values = _.map(addedFoods, name);
      let sum = _.reduce(values, (current, prev) => current + prev, 0);
      return sum;
    }

    let remove = id => {
      removeFood(id);
    }

    let getFill = (current, max) => {
      let percent = (current*100/max) + '%';
      return {
        height: percent
      };
    };

    const dataSourceConfig = {
      text: 'title',
      value: '_id',
    };

    return (
      <BaseLayout>
        <div className={styles.content}>
          <div className={styles.planTitle}>Выполенение плана по еде ({moment().format('LL')})</div>
          <div className={styles.cards}>
            <Paper className={styles.mainCard}>
              <div className={styles.mainCardFill}
                   style={getFill(getMainValue('prot'), cardProt)}></div>
              <div className={styles.mainCardContent}>
                <div className={styles.cardTitle}>Белки</div>
                <div className={styles.cardValue}>{getMainValue('prot')}</div>
                <div>из {cardProt}</div>
              </div>
            </Paper>

            <Paper className={styles.mainCard}>
              <div className={styles.mainCardFill}
                   style={getFill(getMainValue('fats'), cardFats)}></div>
              <div className={styles.mainCardContent}>
                <div className={styles.cardTitle}>Жиры</div>
                <div className={styles.cardValue}>{getMainValue('fats')}</div>
                <div>из {cardFats}</div>
              </div>
            </Paper>

            <Paper className={styles.mainCard}>
              <div className={styles.mainCardFill}
                   style={getFill(getMainValue('carb'), cardCarb)}></div>
              <div className={styles.mainCardContent}>
                <div className={styles.cardTitle}>Углеводы</div>
                <div className={styles.cardValue}>{getMainValue('carb')}</div>
                <div>из {cardCarb}</div>
              </div>
            </Paper>

            <Paper className={styles.mainCard}>
              <div className={styles.mainCardFill}
                   style={getFill(getMainValue('calories'), cardCalories)}></div>
              <div className={styles.mainCardContent}>
                <div className={styles.cardTitle}>Калории</div>
                <div className={styles.cardValue}>{getMainValue('calories')}</div>
                <div>из {cardCalories}</div>
              </div>
            </Paper>
          </div>
          <List>
            {addedFoods.map((food, index) => {
              let text = (
                <div>
                  <span className={styles.mainText}>{food.title},</span>
                <span className={styles.minText}>
                  {food.prot}/
                  {food.fats}/
                  {food.carb}/
                  {food.calories}
                </span>
                </div>
              );

              return <ListItem key={index}
                               primaryText={text}
                               rightIcon={<Delete onClick={remove.bind(null, food._id)}/>}/>
            })}
          </List>
          <div className={styles.paper}>
            <div className={styles.controls}>
              <div className={styles.control}>
                <AutoComplete
                  ref="autocomplete"
                  floatingLabelFixed={true}
                  floatingLabelText="Продукт"
                  filter={AutoComplete.caseInsensitiveFilter}
                  openOnFocus={true}
                  dataSource={foods}
                  maxSearchResults={20}
                  dataSourceConfig={dataSourceConfig}
                  onUpdateInput={fetchAvailableFoods}
                  onNewRequest={(v) => changeField({ name: 'selectedFood', value: v })}
                />
              </div>
              <div className={styles.control}>
                <TextField
                  style={{ width: 110 }}
                  type="number"
                  onChange={changeAmount}
                  value={amount}
                  floatingLabelFixed={true}
                  floatingLabelText="Количество, г"
                />
              </div>
            </div>

            <div className={styles.cardsTitle}>Показатели продукта:</div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Белки</div>
                <div className={styles.cardValue}>{getValue(selectedFood, 'prot')}</div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Жиры</div>
                <div className={styles.cardValue}>{getValue(selectedFood, 'fats')}</div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Углеводы</div>
                <div className={styles.cardValue}>{getValue(selectedFood, 'carb')}</div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Калории</div>
                <div className={styles.cardValue}>{getValue(selectedFood, 'calories')}</div>
              </div>
            </div>
            <RaisedButton
              label="Добавить продукт"
              primary
              onClick={handleAddFood}
            />
          </div>
        </div>
      </BaseLayout>
    );
  }
}
