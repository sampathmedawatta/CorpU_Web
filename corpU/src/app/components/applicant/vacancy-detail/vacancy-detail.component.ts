import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VacancyService, vacancy } from 'src/app/core';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent {
  
  vacancyId? : number;
  vacancy: vacancy;
  
  constructor(private vacancyService:VacancyService,private route: ActivatedRoute){}
  ngOnInit(): void {

    this.vacancyId  = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    this.getVacancyById(this.vacancyId);
  }

  getVacancyById(id : number) {
    this.vacancyService.getVacancy(id).subscribe({
      next: (result: any) => {
      this.vacancy = result[0];     
      }});
    }
}
