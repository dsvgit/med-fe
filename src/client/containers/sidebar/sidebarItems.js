import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import MapsRestaurant from 'material-ui/svg-icons/maps/restaurant';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import DeviceDvr from 'material-ui/svg-icons/device/dvr';


export default [
  {
    id: 'dashboard',
    title: 'Главная',
    icon: <ActionHome />,
    url: '/'
  },
  {
    id: 'calc',
    title: 'Калькулятор',
    icon: <DeviceDvr />,
    url: '/calc'
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
