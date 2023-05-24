import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent {

  searchText : string;
  constructor(private authService : AuthService,private route: Router){}

  ngOnInit(): void {

  }

  search(searchForm: NgForm){

    if(this.authService.isUserApplicant()){
      this.route.navigate(['/Applicant/Search'],{ queryParams: { txt: searchForm.value._searchText}});
    }
    else{
      this.route.navigate(['/Search'],{ queryParams: { txt: searchForm.value._searchText}});
    }
    

  }
}
