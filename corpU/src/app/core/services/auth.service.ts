import { Injectable } from '@angular/core';
import { MessengerService } from './messenger.service';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { operationResult } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router,
    private messengerService: MessengerService,
    private employeeService : EmployeeService ) { }

  isLoggedIn(){
    if (localStorage.getItem('token') != null) {
      return true;
    } 
      return false;
  }
  
  logout(){
    localStorage.removeItem('token');  
    localStorage.removeItem('userRole');  
    localStorage.removeItem('user');  
    localStorage.removeItem('employee');
    localStorage.removeItem('applicant');
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
    var userRole = localStorage.getItem('userRole');

    if (userRole == 'Admin' || userRole  == 'Manager' || userRole  == 'Staff') {
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
