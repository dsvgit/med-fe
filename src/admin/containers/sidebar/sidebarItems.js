import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';

export default [
  {
    id: 'dashboard',
    title: 'Главная',
    icon: <ActionHome />,
    url: '/'
  },
  {
    id: 'users',
    title: 'Пользователи',
    icon: <ActionSupervisorAccount />,
    url: '/users'
  },
  {
    id: 'food',
    title: 'Продукты',
    icon: <MapsRestaurant />,
    url: '/food'
  }
];
