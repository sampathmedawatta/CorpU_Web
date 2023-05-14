import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { VacancyDetailComponent } from './components/applicant/vacancy-detail/vacancy-detail.component';
import { ApplicantUnitHistoryComponent } from './components/applicant/applicant-unit-history/applicant-unit-history.component';
import { ApplicantProfileDetailsComponent } from './components/applicant/applicant-profile-details/applicant-profile-details.component';
import { ApplicantAcademicDetailsComponent } from './components/applicant/applicant-academic-details/applicant-academic-details.component';
import { ApplicantClassPreferencesComponent } from './components/applicant/applicant-class-preferences/applicant-class-preferences.component';
import { ManageUnitsComponent } from './components/permenent_staff/manage-units/manage-units.component';
import { ViewApplicationsComponent } from './components/permenent_staff/view-applications/view-applications.component';
import { ReviewApplicationsComponent } from './components/permenent_staff/review-applications/review-applications.component';
import { PrivacyStatementComponent } from './components/shared/privacy-statement/privacy-statement.component';
import { TermsAndConditionsComponent } from './components/shared/terms-and-conditions/terms-and-conditions.component';
import { ProtectYourselfOnlineComponent } from './components/shared/protect-yourself-online/protect-yourself-online.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: 'Login',component: LoginComponent}, 
  {path: 'Applicant',component: ApplicantComponent, canActivate: [AuthGuard]}, 
  {path: 'ViewVacancy/:id',component:VacancyDetailComponent},
  {path: 'ApplicationHistory', component:ApplicantUnitHistoryComponent, canActivate: [AuthGuard]}, 
  {path: 'ApplicantPersonalDetails', component:ApplicantProfileDetailsComponent, canActivate: [AuthGuard]}, 
  {path: 'ApplicantAcademicDetails', component:ApplicantAcademicDetailsComponent, canActivate: [AuthGuard]}, 
  {path: 'ApplicantClassPreferences', component:ApplicantClassPreferencesComponent, canActivate: [AuthGuard]}, 
  {path: 'ManageUnits', component:ManageUnitsComponent, canActivate: [AuthGuard]}, 
  {path: 'ViewApplications', component:ViewApplicationsComponent, canActivate: [AuthGuard]}, 
  {path: 'ReviewApplications', component:ReviewApplicationsComponent, canActivate: [AuthGuard]}, 
  {path: 'pricacyStatement',component:PrivacyStatementComponent},
  {path: 'TermsAndConditions', component:TermsAndConditionsComponent},
  {path: 'ProtectYourselfOnline', component:ProtectYourselfOnlineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
