import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout.component";

export const LAYOUT_ROUTES: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'profile/:uid',
        loadChildren: () => import('./profile/profile.routes').then(m => m.PROFILE_ROUTES)
      },
      {
        path: '',
        loadChildren: () => import('./main/main.routes').then(m => m.MAIN_ROUTES)
      }

      ]
  }
  ];
