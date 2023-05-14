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

     console.log (this.isAuthorized(route));

    return this.isAuthorized(route);
  }

  private isAuthorized(route: ActivatedRouteSnapshot) : boolean {

    const roles = ['Admin','PermanentStaff', 'Applicant']; // TODO get role list form API
    const expectedRoles = route.data['expectedRoles'];
    const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);

    console.log(expectedRoles);
    console.log("roleMatches - "+ roleMatches);

    return (roleMatches <= 0 ) ? false : true;
  }
  
}
