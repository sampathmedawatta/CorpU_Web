import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, MessengerService, operationResult, UserService, user, EmployeeService, ApplicantService } from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isUserLoggedIn: boolean = false;
  formModel = {
    email: '',
    password: '',
  };

  userProfile : user;
  
  constructor(
    private router: Router,
    private userService : UserService,
    private messengerService : MessengerService,
    private authService : AuthService,
    private employeeService : EmployeeService,
    private applicantService : ApplicantService
  ) {
   
  }

  ngOnInit(): void {

    if (localStorage.getItem('token') != null) {
      this.authService.checkUserRole();
    }
  }


  login() {
    this.userService.loginUser(this.formModel).subscribe({
      next: (result: operationResult) => {
        if(result.data != null){
          this.userProfile = result.data.user;

          localStorage.setItem('token', result.data.jwtToken);
          localStorage.setItem('user', JSON.stringify(this.userProfile));
          
          let role = this.userProfile.userRole?.roleName ? this.userProfile.userRole?.roleName : '';
          let userEmail = this.userProfile.email ? this.userProfile.email : '';
          let userid = this.userProfile.userId ? this.userProfile.userId : 0;

          this.isUserLoggedIn = true;
          this.setUserRole(userEmail, userid, role);
        }
        else{
          this.isUserLoggedIn = false;
        }
       
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

  setUserRole(userEmail :string, userid: number, role :string){
    this.employeeService.getEmployeeByEmail(userEmail).subscribe({
      next: (result: operationResult) => {
        var emp = result.data;
        if(emp){
          localStorage.setItem('userRole', (emp.employeeRole.roleName));
          localStorage.setItem('employee', (JSON.stringify(emp)));
        }
        else{
          localStorage.setItem('userRole', role);
          this.applicantService.getApplicantByUserId(userid).subscribe({
            next: (result: operationResult) => {
              var app = result.data;
              if(app){
                localStorage.setItem('applicant', (JSON.stringify(app)));
              }
            }
          });
        }

        this.messengerService.sendMsgUserLogin();
        this.authService.checkUserRole();
      }
    });
  }
  
  handlerCloseAllert() {
    this.isUserLoggedIn = false;
    this.router.navigateByUrl('/login');
  }
}
