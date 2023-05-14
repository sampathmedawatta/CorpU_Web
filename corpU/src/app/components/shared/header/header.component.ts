import { Component } from '@angular/core';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isloggedIn :boolean;
  constructor(private authService : AuthService){
  }

  ngOnInit(): void {
    this.isloggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
