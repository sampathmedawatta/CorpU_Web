import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { VacancyDetailComponent } from './components/applicant/vacancy-detail/vacancy-detail.component';
import { ApplicantUnitHistoryComponent } from './components/applicant/applicant-unit-history/applicant-unit-history.component';
import { ApplicantProfileDetailsComponent } from './components/applicant/applicant-profile-details/applicant-profile-details.component';
import { ApplicantAcademicDetailsComponent } from './components/applicant/applicant-academic-details/applicant-academic-details.component';
import { ApplicantClassPreferencesComponent } from './components/applicant/applicant-class-preferences/applicant-class-preferences.component';
import { ManageUnitsComponent } from './components/permanent_staff/manage-units/manage-units.component';
import { ViewApplicationsComponent } from './components/permanent_staff/view-applications/view-applications.component';
import { ReviewApplicationsComponent } from './components/permanent_staff/review-applications/review-applications.component';
import { PrivacyStatementComponent } from './components/shared/privacy-statement/privacy-statement.component';
import { TermsAndConditionsComponent } from './components/shared/terms-and-conditions/terms-and-conditions.component';
import { ProtectYourselfOnlineComponent } from './components/shared/protect-yourself-online/protect-yourself-online.component';
import { ApplicantAvailabilityDetailsComponent } from './components/applicant/applicant-availability-details/applicant-availability-details.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './components/shared/register/register.component';
import { RoleGuardGuard } from './core/guards/role-guard.guard';
import { DashboardComponent } from './components/permanent_staff/dashboard/dashboard.component';
import { AboutUniversityComponent } from './components/about-university/about-university.component';

const routes: Routes = [
  {path: 'Login',component: LoginComponent}, 
  {path: 'Register',component: RegisterComponent}, 

  {path: 'Applicant',component: ApplicantComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Applicant']}}, 
  {path: 'ViewVacancy/:id',component:VacancyDetailComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Applicant']}}, 
  {path: 'ApplicationHistory', component:ApplicantUnitHistoryComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Applicant']}}, 
  {path: 'ApplicantPersonalDetails', component:ApplicantProfileDetailsComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Applicant']}},  
  {path: 'ApplicantAcademicDetails', component:ApplicantAcademicDetailsComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Applicant']}}, 
  {path: 'ApplicantClassPreferences', component:ApplicantClassPreferencesComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Applicant']}}, 

  {path: 'Dashboard', component:DashboardComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Admin','Employee']}},  
  {path: 'ManageUnits', component:ManageUnitsComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Admin','Employee']}},  
  {path: 'ViewApplications', component:ViewApplicationsComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Admin','Employee']}},
  {path: 'ReviewApplications', component:ReviewApplicationsComponent, 
  canActivate: [AuthGuard, RoleGuardGuard],
  data:{expectedRoles:['Admin','Employee']}},

  {path: 'aboutUniversity',component:AboutUniversityComponent},
  {path: 'pricacyStatement',component:PrivacyStatementComponent},
  {path: 'TermsAndConditions', component:TermsAndConditionsComponent},
  {path: 'ProtectYourselfOnline', component:ProtectYourselfOnlineComponent},
  {path: 'ApplicantAvailabilityDetails', component:ApplicantAvailabilityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
