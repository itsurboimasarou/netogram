//implements the routes for the login page
import { Routes } from '@angular/router';
import {LoginComponent} from "./login.component";

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];
