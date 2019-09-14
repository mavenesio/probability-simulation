import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'MONEDAS',
    group: true,
  },
  {
    title: 'Tirar moneda',
    icon: 'radio-button-on-outline',
    link: 'coin/throw-coin',
  },
  {
    title: 'Tirar moneda hasta',
    icon: 'alert-circle-outline',
    link: 'coin/throw-coin-until',
  },
  {
    title: 'DADOS',
    group: true,
  },
  {
    title: 'Tirar dado hasta',
    icon: 'square-outline',
    link: 'dice/roll-dice-until',
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
