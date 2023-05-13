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
    this.userService.loginUser(this.formModel).subscribe({
      next: (result: any) => {
      //  this.authToken = result.data; //TODO save auth

        localStorage.setItem('token', this.authToken.jwtToken);
        localStorage.setItem('refreshToken', this.authToken.refreshToken);

        this.router.navigateByUrl('/home'); //TODO redirect user Applicant or Permenent staff
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
