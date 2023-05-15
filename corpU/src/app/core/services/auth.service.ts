import { Injectable } from '@angular/core';
import { MessengerService } from './messenger.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router,private messengerService: MessengerService) { }

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

  getUserRole(){
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

  checkUserRole(){

    if(this.isUserApplicant()){
      this.router.navigateByUrl('/Applicant');
    }
    else if(this.isUserPermanentStaff()){
     
      this.router.navigateByUrl('/Dashboard');
    }
    else{
      this.logout();
      this.router.navigateByUrl('/Login');
    }
   
  }
}
