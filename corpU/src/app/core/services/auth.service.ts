import { Injectable } from '@angular/core';
import { MessengerService } from './messenger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private messengerService: MessengerService) { }

  isLoggedIn(){
    if (localStorage.getItem('token') != null) {
      return true;
    } 
      return false;
  }
  
  logout(){
    localStorage.removeItem('token');  
    localStorage.removeItem('userRole');  
    this.messengerService.sendMsgUserLogout();
  }

  userRole(){
    return localStorage.getItem('userRole');  
  }

  isUserApplicant(){
    if (localStorage.getItem('userRole') == 'Applicant') {
      return true;
    } 
      return false;
  }

  isUserPermanentStaff(){
    if (localStorage.getItem('userRole') == 'PermanentStaff') {
      return true;
    } 
      return false;

  }
}
