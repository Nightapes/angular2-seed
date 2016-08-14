import { Route } from '@angular/router';
import { AboutComponent } from './index';
import { SecureGuard } from '../secure/index';

export const AboutRoutes: Route[] = [
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [SecureGuard]
  }
];
