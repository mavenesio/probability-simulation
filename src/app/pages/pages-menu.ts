import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },

  {
    title: 'Moneda',
    icon: 'radio-button-on-outline',
    children: [
      {
        title: 'Tirar moneda',
        link: 'coin/throw-coin',
      },
      {
        title: 'Tirar moneda hasta',
        link: 'coin/throw-coin-until',
      },
    ],
  },
  {
    title: 'Dado',
    icon: 'square-outline',
    children: [
      {
        title: 'Tirar dado',
        link: '/dice/roll-dice',
      },
      {
        title: 'Tirar moneda hasta',
        link: '/dice/roll-dice-until',
      },
    ],
  },
  /*
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
