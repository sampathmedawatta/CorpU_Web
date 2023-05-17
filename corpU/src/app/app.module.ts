import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavSharedomponent } from './components/shared/nav/nav.component';
import { NavApplicantComponent } from './components/applicant/shared/nav/nav.component';
import { NavPermanentComponent } from './components/permanent_staff/shared/nav/nav.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { ApplicantHeaderComponent} from './components/applicant/shared/header/header.component'
import {ApplicantFooterComponent} from './components/applicant/shared/footer/footer.component'
import { PermanentHeaderComponent} from './components/permanent_staff/shared/header/header.component'
import {PermanentFooterComponent} from './components/permanent_staff/shared/footer/footer.component';
import { VacancyDetailComponent } from './components/applicant/vacancy-detail/vacancy-detail.component';
import { ApplicantUnitHistoryComponent } from './components/applicant/applicant-unit-history/applicant-unit-history.component';
import { ApplicantProfileDetailsComponent } from './components/applicant/applicant-profile-details/applicant-profile-details.component';
import { ApplicantAcademicDetailsComponent } from './components/applicant/applicant-academic-details/applicant-academic-details.component';
import { ApplicantClassPreferencesComponent } from './components/applicant/applicant-class-preferences/applicant-class-preferences.component';
import { ManageUnitsComponent } from './components/permanent_staff/unit/manage-units/manage-units.component';
import { ViewApplicationsComponent } from './components/permanent_staff/application/view-applications/view-applications.component';
import { ReviewApplicationsComponent } from './components/permanent_staff/application/review-applications/review-applications.component';
import { PrivacyStatementComponent } from './components/shared/privacy-statement/privacy-statement.component';
import { LoginComponent } from './components/shared/login/login.component';
import { TermsAndConditionsComponent } from './components/shared/terms-and-conditions/terms-and-conditions.component';
import { ProtectYourselfOnlineComponent } from './components/shared/protect-yourself-online/protect-yourself-online.component';
import { ApplicantAvailabilityDetailsComponent } from './components/applicant/applicant-availability-details/applicant-availability-details.component'
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './components/shared/register/register.component';
import { DashboardComponent } from './components/permanent_staff/dashboard/dashboard.component';
import { AboutUniversityComponent } from './components/about-university/about-university.component';
import { HomePageComponent } from './components/shared/home-page/home-page.component';
import { UserListComponent } from './components/permanent_staff/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/permanent_staff/user/user-details/user-details.component';
import { EmployeeListComponent } from './components/permanent_staff/employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/permanent_staff/employee/employee-details/employee-details.component';
import { EmployeeAddComponent } from './components/permanent_staff/employee/employee-add/employee-add.component';
import { UnitListComponent } from './components/permanent_staff/unit/unit-list/unit-list.component';
import { UnitAddComponent } from './components/permanent_staff/unit/unit-add/unit-add.component';
import { VacancyListComponent } from './components/permanent_staff/vacancy/vacancy-list/vacancy-list.component';
import { VacancyAddComponent } from './components/permanent_staff/vacancy/vacancy-add/vacancy-add.component';
import { VacancyViewComponent } from './components/permanent_staff/vacancy/vacancy-view/vacancy-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavSharedomponent,
    NavApplicantComponent,
    NavPermanentComponent,
    ApplicantComponent,
    ApplicantHeaderComponent,
    ApplicantFooterComponent,
    PermanentFooterComponent,
    PermanentHeaderComponent,
    VacancyDetailComponent,
    ApplicantUnitHistoryComponent,
    ApplicantProfileDetailsComponent,
    ApplicantAcademicDetailsComponent,
    ApplicantClassPreferencesComponent,
    ManageUnitsComponent,
    ViewApplicationsComponent,
    ReviewApplicationsComponent,
    PrivacyStatementComponent,
    LoginComponent,
    TermsAndConditionsComponent,
    ProtectYourselfOnlineComponent,
    ApplicantAvailabilityDetailsComponent,
    RegisterComponent,
    DashboardComponent,
    AboutUniversityComponent,
    HomePageComponent,
    UserListComponent,
    UserDetailsComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeAddComponent,
    UnitListComponent,
    UnitAddComponent,
    VacancyListComponent,
    VacancyAddComponent,
    VacancyViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
