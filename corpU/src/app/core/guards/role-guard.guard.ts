import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.isAuthorized(route);
  }

  private isAuthorized(route: ActivatedRouteSnapshot) : boolean {

    const role = localStorage.getItem('userRole'); 
    const expectedRoles = route.data['expectedRoles'];
    const roleMatches = expectedRoles.find((r: any) => r === role); 

    return (roleMatches == undefined) ? false : true;
  }
  
}
