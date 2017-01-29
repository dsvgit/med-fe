import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';


export default [
  {
    id: 'dashboard',
    title: 'Главная',
    icon: <ActionHome />,
    url: '/'
  },
  {
    id: 'food',
    title: 'Продукты',
    icon: <MapsRestaurant />,
    url: '/food'
  }
];
