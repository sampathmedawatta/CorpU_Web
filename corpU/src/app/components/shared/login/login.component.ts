import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, MessengerService, operationResult, UserService, user, EmployeeService } from 'src/app/core';

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
    private employeeService : EmployeeService
  ) {
   
  }

  ngOnInit(): void {

    // this.userService.getUserById(34).subscribe({
    //   next: (result: operationResult) => {
    //     this.userProfile = result.data;
    //   console.log(' user result : '+ this.userProfile);
    //   }});

    if (localStorage.getItem('token') != null) {
      this.authService.checkUserRole();
    }
  }


  login() {

    // localStorage.setItem('token', "sample token");

    // localStorage.setItem('userRole',"Applicant" );
    

    this.userService.loginUser(this.formModel).subscribe({
      next: (result: operationResult) => {
        if(result.data != null){
          this.userProfile = result.data.user;

          localStorage.setItem('token', result.data.jwtToken);
          localStorage.setItem('user', JSON.stringify(this.userProfile));
          
          let role = this.userProfile.userRole?.roleName ? this.userProfile.userRole?.roleName : '';
          let userEmail = this.userProfile.email ? this.userProfile.email : '';

          this.setUserRole(userEmail,role);
        }
        else{
          this.isUserLoggedIn = true;
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

  setUserRole(userEmail :string,  role :string){
    this.employeeService.getEmployeeByEmail(userEmail).subscribe({
      next: (result: operationResult) => {
        var emp = result.data;
        if(emp){
          localStorage.setItem('userRole', (emp.employeeRole.roleName));
        }
        else{
          localStorage.setItem('userRole', role);
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
