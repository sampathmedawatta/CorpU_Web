import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, MessengerService, operationResult, UserService, user } from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formModel = {
    email: '',
    password: '',
  };

  userProfile : user;
  
  constructor(
    private router: Router,
    private userService : UserService,
    private messengerService : MessengerService,
    private authService : AuthService
  ) {
   
  }

  ngOnInit(): void {

    // this.userService.getUserById(34).subscribe({
    //   next: (result: operationResult) => {
    //     this.userProfile = result.data;
    //   console.log(' user result : '+ this.userProfile);
    //   }});

    if (localStorage.getItem('token') != null) {
      this.checkUserRole();
    }
  }

  checkUserRole(){

    if(this.authService.isUserApplicant()){
      this.router.navigateByUrl('/Applicant');
    }
    else if(this.authService.isUserPermanentStaff()){
     
      this.router.navigateByUrl('/Dashboard');
    }
    else{
      this.authService.logout();
      this.router.navigateByUrl('/Login');
    }
   
  }

  login() {

    this.userService.loginUser(this.formModel).subscribe({
      next: (result: operationResult) => {

      this.userProfile = result.data.user;
      localStorage.setItem('token', result.data.jwtToken);
      localStorage.setItem('userRole', (this.userProfile.userRole?.roleName) ? this.userProfile.userRole?.roleName : '');
        
      this.messengerService.sendMsgUserLogin();
      this.checkUserRole();
       
      },
      error: (error) => {
        if (error.status == 400) {
          console.error('Incorrect login details');
        } else {
          console.error('There was an error!', error);
        }
      },
    });
  }
}
