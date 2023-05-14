import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { } 
    canActivate():
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/Login']);
        return false;
      }
      // logged in, so return true
      this.authService.isLoggedIn();
      return true;
    }
}