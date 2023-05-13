import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { VacancyDetailComponent } from './components/applicant/vacancy-detail/vacancy-detail.component';
import { ApplicantUnitHistoryComponent } from './components/applicant/applicant-unit-history/applicant-unit-history.component';
import { ApplicantProfileDetailsComponent } from './components/applicant/applicant-profile-details/applicant-profile-details.component';
import { ApplicantAcademicDetailsComponent } from './components/applicant/applicant-academic-details/applicant-academic-details.component';
import { ApplicantClassPreferencesComponent } from './components/applicant-class-preferences/applicant-class-preferences.component';
import { ManageUnitsComponent } from './components/permenent_staff/manage-units/manage-units.component';
import { ViewApplicationsComponent } from './components/permenent_staff/view-applications/view-applications.component';
import { ReviewApplicationsComponent } from './components/permenent_staff/review-applications/review-applications.component';
import { PrivacyStatementComponent } from './components/shared/privacy-statement/privacy-statement.component';

const routes: Routes = [
  {path: 'Login',component: LoginComponent}, 
  {path: 'Applicant',component: ApplicantComponent}, 
  {path: 'ViewVacancy',component:VacancyDetailComponent},
  {path: 'ApplicationHistory', component:ApplicantUnitHistoryComponent},
  {path: 'ApplicantPersonalDetails', component:ApplicantProfileDetailsComponent},
  {path: 'ApplicantAcademicDetails', component:ApplicantAcademicDetailsComponent},
  {path: 'ApplicantClassPreferences', component:ApplicantClassPreferencesComponent},
  {path: 'ManageUnits', component:ManageUnitsComponent},
  {path: 'ViewApplications', component:ViewApplicationsComponent},
  {path: 'ReviewApplications', component:ReviewApplicationsComponent},
  {path: 'pricacyStatement',component:PrivacyStatementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
