import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserService, operationResult, register } from 'src/app/core';



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
  userData: register = new register();
  isUserRegistered: boolean = false;
  
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private userService : UserService,
    private authService : AuthService
  ) {}
  

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.authService.checkUserRole();
    }
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.builder.group(
      {
        name: ['', [Validators.required]],
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

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

  register() {

    this.userData.name = this.registerForm.value.name;
    this.userData.email = this.registerForm.value.email;
    this.userData.password = this.registerForm.value.password;
    this.userData.userRoleId = 1;

    this.userService.postUser(this.userData).subscribe({
      next: (result: operationResult) => {

        this.isUserRegistered = true;
        this.registerForm.reset();

      },
      error: (error) => {
        if (error.status == 400) {
          console.error('Incorrect registrtion details');
        } else {
          console.error('There was an error!', error);
        }
      },
    });

  }

  handlerCloseAllert() {
    this.router.navigateByUrl('/login');
  }
}
