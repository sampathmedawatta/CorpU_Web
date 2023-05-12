import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { ApplicantUnitHistoryComponent } from './applicant-unit-history/applicant-unit-history.component';
import { ApplicantProfileDetailsComponent } from './applicant-profile-details/applicant-profile-details.component';
import { ApplicantAcademicDetailsComponent } from './applicant-academic-details/applicant-academic-details.component';

const routes: Routes = [
  {path: 'Applicant',component: ApplicantComponent}, 
  {path: 'ViewVacancy',component:VacancyDetailComponent},
  {path: 'ApplicationHistory', component:ApplicantUnitHistoryComponent},
  {path: 'ApplicantPersonalDetails', component:ApplicantProfileDetailsComponent},
  {path: 'ApplicantAcademicDetails', component:ApplicantAcademicDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
