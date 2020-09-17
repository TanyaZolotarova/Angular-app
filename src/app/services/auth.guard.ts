import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private api: ApiService,
        private router: Router
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.api.isAuthenticated()) {
            return true;
        } else {
            this.api.logout();
            this.router.navigate(['/'], {
                queryParams: {
                    loginAgain: true
                }
            });
        }
    }

}
