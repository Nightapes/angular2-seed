import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class SecureGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let roles: any = route.data['roles'];

        if (!roles && roles.length === 0) {
            return true;
        } else {
            if (this.authService.isLoggedIn(roles)) { return true; }
        }


        // Store the attempted URL for redirecting
        this.authService.redirectUrl = state.url;


        // Navigate to the login page 
        this.router.navigate(['/login']);
        return false;
    }
}
