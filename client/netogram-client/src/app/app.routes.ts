import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./page/login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./page/register/register.routes').then((m) => m.REGISTER_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./page/layout/layout.routes').then((m) => m.LAYOUT_ROUTES),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./page/detail/detail.routes').then((m) => m.DETAIL_ROUTES),
  },
];
