import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

constructor(private router: Router,private authService : AuthService){

}

  ngOnInit(): void {
    
    if(this.authService.isUserPermanentStaff()){
      this.router.navigateByUrl('/Dashboard');
    }
    else if(this.authService.isUserApplicant()){
      this.router.navigateByUrl('/Applicant');
    }
    
  }
}
