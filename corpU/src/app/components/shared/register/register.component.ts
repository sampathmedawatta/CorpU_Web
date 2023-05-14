import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, user } from 'src/app/core';



function characterValidator(control: any) {
  if (control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;
  if (control.value.indexOf('@') > -1) {
    return null;
  } else {
    return { symbol: true };
  }
}

function passwordMatchValidator(form: any) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMatch: true });
  } else {
    confirmPassword.setErrors(null);
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  userData: user = new user();
  isUserRegistered: boolean = false;
  
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private userService : UserService
  ) {}
  

  ngOnInit(): void {
    // if (localStorage.getItem('token') != null) {
    //   this.router.navigateByUrl('/Applicant');
    // }
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.builder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, characterValidator, Validators.minLength(6)],
        ],
        confirmPassword: '',
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  register() {

    this.userData.email = this.registerForm.value.email;
    this.userData.password = this.registerForm.value.password;
    this.userData.userRoleId = 1;
    
    this.isUserRegistered = true;
    this.registerForm.reset();

    // this.userData.userRole =  {
    //   userRoleId: 2,
    //   roleName: 'Permenent Staff',
    //   status: true
    // }
    // this.userService.postUser(this.userData).subscribe((data) =>{
    //   this.isUserRegistered = true;
    //   this.registerForm.reset();
    // });
 
  }

  handlerCloseAllert() {
    this.router.navigateByUrl('/login');
  }
}
