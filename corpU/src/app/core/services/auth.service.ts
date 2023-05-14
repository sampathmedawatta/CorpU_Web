import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
  }
  
  logout(){
    localStorage.removeItem('token');  
  }

}
