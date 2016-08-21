import { Route } from '@angular/router';
import { HomeComponent } from './index';
import { SecureGuard } from '../secure/index';

export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [SecureGuard],
    data: { roles: ['user', 'admin'] }
  }
];
