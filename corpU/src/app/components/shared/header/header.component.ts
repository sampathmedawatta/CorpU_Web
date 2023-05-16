import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, MessengerService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isloggedIn :boolean = false;
  isApplicant :boolean = false;
  isEmployee :boolean = false;

  constructor(private authService : AuthService,private messengerService: MessengerService, private router: Router){
  }

  ngOnInit(): void {
    this.isloggedIn = this.authService.isLoggedIn();
    this.isApplicant = this.authService.isUserApplicant();
    this.isEmployee = this.authService.isUserPermanentStaff();

    this.handleSubscription();
  }

  handleSubscription() {
    this.messengerService.getMsgUserLogin().subscribe(() => {
      this.isloggedIn = this.authService.isLoggedIn();
      this.isApplicant = this.authService.isUserApplicant();
      this.isEmployee = this.authService.isUserPermanentStaff();
    });

    this.messengerService.getMsgUserLogout().subscribe(() => {
      this.isloggedIn = this.authService.isLoggedIn();
      this.isApplicant = this.authService.isUserApplicant();
      this.isEmployee = this.authService.isUserPermanentStaff();
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/Login');
  }
}
