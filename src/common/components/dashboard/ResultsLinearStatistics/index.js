import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import ReactHighCharts from 'react-highcharts';


export default props => {
  let {
    statistics: _statistics
    } = props;

  if (!_statistics) return null;
  let statistics = _.toArray(_statistics);
  console.log(statistics);

  let categories = statistics.map(chunk => {
    let date = _.get(chunk, '_id.date');
    return moment(date).format('ll');
  });

  let results = statistics.map(chunk => {
    let value = _.get(chunk, 'summedCalories') || 0;
    return value;
  });

  let norm = statistics.map(chunk => {
    let value = _.get(chunk, 'card.calories') || 0;
    return value;
  });

  console.log(categories);
  console.log(results);
  console.log(norm);

  let config = {
    title: {
      text: 'Выполнение нормы',
      //x: -20 //center
    },
    panning: false,
    pinchType: false,
    xAxis: {
      categories
    },
    yAxis: {
      title: {
        text: 'Каллории, ккал'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: ' ккал'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Норма',
      data: norm
    }, {
      name: 'Результат',
      data: results
    }
    ]
  };

  return <ReactHighCharts config={config} />
}
