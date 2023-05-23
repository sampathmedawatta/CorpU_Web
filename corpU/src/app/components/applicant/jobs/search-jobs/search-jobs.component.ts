import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent {

  searchText : string;
  constructor(private route: Router){}

  ngOnInit(): void {

  }

  search(searchForm: NgForm){
    this.route.navigate(['/Applicant/Search'],{ queryParams: { txt: searchForm.value._searchText}});
  }
}
