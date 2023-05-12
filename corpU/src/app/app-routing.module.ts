import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { ApplicantUnitHistoryComponent } from './applicant-unit-history/applicant-unit-history.component';
import { ApplicantProfileDetailsComponent } from './applicant-profile-details/applicant-profile-details.component';

const routes: Routes = [
  {path: 'Applicant',component: ApplicantComponent}, 
  {path: 'ViewVacancy',component:VacancyDetailComponent},
  {path: 'ApplicationHistory', component:ApplicantUnitHistoryComponent},
  {path: 'ApplicantPersonalDetails', component:ApplicantProfileDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
