import Root from '../pages/Root';
import Home from '../pages/Home';
import Todos from '../pages/Todos';
import NotFound from '../pages/NotFound';
import Create from '../pages/Account/Create';
import Login from '../pages/Account/Login';
import Reset from '../pages/Account/Reset';
import TwoStepVerification from '../pages/Account/Email';
import Email from '../pages/Account/Email/Email';
import Factor from '../pages/Account/Factor';

export const routes = [
  {
    path: '/',
    exact: true,
    menu: 'Home',
    component: Home
  },
  {
    path: '/account/create',
    exact: true,
    menu: 'Create',
    component: Create
  },
  {
    path: '/account/login',
    exact: true,
    menu: 'Login',
    component: Login
  },
  {
    path: '/account/reset-password',
    exact: true,
    menu: 'Reset',
    component: Reset
  },
  {
    path: '/account/email-verify',
    exact: true,
    menu: 'Email',
    component: Email
  },
  {
    path: '/account/authentication-2-step-verification',
    exact: true,
    menu: 'Factor',
    component: Factor
  },
  {
    path: '/todos',
    exact: true,
    menu: 'Todos',
    component: Todos
  },
  // {
  //   path: '/account',
  //   component: Todos,
  //   routes: [
  //     {
  //       path: '/create',
  //       exact: true,
  //       menu: 'Todos',
  //       component: Todos
  //     },
  //     {
  //       path: '/login',
  //       exact: true,
  //       menu: 'Todos',
  //       component: Todos
  //     },
  //     {
  //       path: '/email-verify',
  //       exact: true,
  //       menu: 'Todos',
  //       component: Todos
  //     },
  //     {
  //       path: '/password-reset',
  //       exact: true,
  //       menu: 'Todos',
  //       component: Todos
  //     },
  //     {
  //       path: '/2-factor-auth',
  //       exact: true,
  //       menu: 'Todos',
  //       component: Todos
  //     }
  //   ]
  // },
  {
    path: '/*',
    component: NotFound
  }
];

export default [
  {
    component: Root,
    routes
  }
];
