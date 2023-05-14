import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, MessengerService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isloggedIn :boolean;
  constructor(private authService : AuthService,private messengerService: MessengerService, private router: Router){
  }

  ngOnInit(): void {
    this.isloggedIn = this.authService.isLoggedIn();
    this.handleSubscription();
  }

  handleSubscription() {
    this.messengerService.getMsgUserLogin().subscribe(() => {
      this.isloggedIn = this.authService.isLoggedIn();
    });
    this.messengerService.getMsgUserLogout().subscribe(() => {
      this.isloggedIn = this.authService.isLoggedIn();
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/Login');
  }
}
