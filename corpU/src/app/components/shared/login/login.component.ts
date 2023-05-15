import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, MessengerService, UserService, user } from 'src/app/core';

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

  userProfile : user
  authToken : any;
  
  constructor(
    private router: Router,
    private userService : UserService,
    private messengerService : MessengerService,
    private authService : AuthService
  ) {
   
  }

  ngOnInit(): void {

    this.userService.getUser(34).subscribe({
      next: (result: any) => {
        this.userProfile = result.data;
      console.log(' user result : '+ this.userProfile);
      }});

    if (localStorage.getItem('token') != null) {
      this.checkUserRole();
    }
  }

  checkUserRole(){

    if(this.authService.isUserApplicant()){
      console.log('Applicant');
      this.router.navigateByUrl('/Applicant');
    }
    else if(this.authService.isUserPermanentStaff()){
      console.log('Dashboard');
      this.router.navigateByUrl('/Dashboard');
    }
    else{
      this.authService.logout();
      this.router.navigateByUrl('/Login');
    }
   
  }

  login() {

    localStorage.setItem('token', "testToken");
    localStorage.setItem('userRole', "Applicant");

    this.messengerService.sendMsgUserLogin();
    this.checkUserRole();

    // TODO : implement this after api configuration

    // this.userService.loginUser(this.formModel).subscribe({
    //   next: (result: any) => {
    //   // this.authToken = result.data; //TODO save auth
    //     localStorage.setItem('token', "testToken"); // this.authToken.jwtToken
    //     this.router.navigateByUrl('/Applicant'); // TODO redirect user Applicant or Permenent staff
    //   },
    //   error: (error) => {
    //     if (error.status == 400) {
    //       console.error('Incorrect login details');
    //     } else {
    //       console.error('There was an error!', error);
    //     }
    //   },
    // });
  }
}
