import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

    roles: string[] = [];
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    private loggedIn: boolean;

    constructor(private router: Router) { }

    isLoggedIn(neededRoles: string[]): boolean {
        if (!this.loggedIn) {
            return false;
        }

        if (neededRoles === undefined) {
            return true;
        }

        let hasRole: boolean;
        this.roles.forEach(role => {
            let index = neededRoles.indexOf(role);
            if (index >= 0) {
                hasRole = true;
            }
        });

        return hasRole;
    }

    login(role: string): Observable<boolean> {
        this.loggedIn = true;
        switch (role) {
            case 'user':
                return Observable.of(true).delay(1000).do(val => {
                    this.roles.push('user');
                });
            case 'admin':
                return Observable.of(true).delay(1000).do(val => {
                    this.roles.push('admin');
                });
            default:
                return Observable.of(false);
        }

    }


    logout() {
        this.loggedIn = false;
        this.router.navigate(['login']);
    }
}
