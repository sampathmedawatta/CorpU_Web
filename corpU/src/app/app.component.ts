import { Component } from '@angular/core';
import { AuthService, MessengerService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corpU';
  isEmployee : boolean = false;

constructor(private authService : AuthService,private messengerService: MessengerService){

}

ngOnInit(): void {
    this.isEmployee = this.authService.isUserPermanentStaff();
    this.handleSubscription();
  }

  handleSubscription() {
    this.messengerService.getMsgUserLogin().subscribe(() => {
      this.isEmployee = this.authService.isUserPermanentStaff();
    });

    this.messengerService.getMsgUserLogout().subscribe(() => {
      this.isEmployee = this.authService.isUserPermanentStaff();
    });
  }
}
