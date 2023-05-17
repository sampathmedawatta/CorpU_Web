import { Component } from '@angular/core';

@Component({
  selector: 'app-permanent-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavPermanentComponent {

  role: string;
  isAdmin: boolean = false;

  constructor(){}

  ngOnInit(): void {
    let userRole = localStorage.getItem('userRole');
    if (userRole) {
    this.role = userRole;

    if(userRole=='Admin'){
      this.isAdmin = true;
    }
  }
}
}
