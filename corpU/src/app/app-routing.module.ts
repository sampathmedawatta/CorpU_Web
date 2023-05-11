import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
const routes: Routes = [
  {path: 'Applicant',component: ApplicantComponent}, 
  {path: 'ViewVacancy',component:VacancyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
