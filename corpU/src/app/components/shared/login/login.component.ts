import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, user } from 'src/app/core';

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
    private userService : UserService
  ) {
   
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/home');
    }
  }

  login() {

    localStorage.setItem('token', "testToken");
    this.router.navigateByUrl('/Applicant');
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
