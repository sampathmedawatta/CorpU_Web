import { Component } from '@angular/core';
import { UserService, user } from 'src/app/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {
 
  users: user[] = [];
  constructor(private userService:UserService) {
    
  }

  ngOnInit():void{
    this.userService.geAllUsers().subscribe((res: user[]) => {
      this.users  = res;
      console.log(this.users);
  });

  this.userService.getUser().subscribe((res: user) => {
    console.log(this.users);
});
  }
}
