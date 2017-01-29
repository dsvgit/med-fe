import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';
import ActionSettings from 'material-ui/svg-icons/action/settings';


export default [
  {
    id: 'dashboard',
    title: 'Главная',
    icon: <ActionHome />,
    url: '/'
  },
  {
    id: 'food',
    title: 'Мои продукты',
    icon: <MapsRestaurant />,
    url: '/food'
  },
  {
    id: 'profile',
    title: 'Мой профиль',
    icon: <ActionSettings />,
    url: '/profile'
  }
];
