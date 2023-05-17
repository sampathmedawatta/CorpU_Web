import { Component } from '@angular/core';
import { UserService, user } from 'src/app/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: user[] = [];

constructor(private userService : UserService){

}
  ngOnInit(): void {
    this.getUserList();
  }

getUserList() {
  this.userService.geAllUsers().subscribe({
    next: (result: any) => {
    this.users = result.data;
    },
    error: (error) => {
      if (error.status == 400) {
        console.error('Incorrect details');
      } else {
        console.error('There was an error!', error);
      }
    }
  });
}

}
