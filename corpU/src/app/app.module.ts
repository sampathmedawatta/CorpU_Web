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
import { NavPermanentComponent } from './components/permenent_staff/shared/nav/nav.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { ApplicantHeaderComponent} from './components/applicant/shared/header/header.component'
import {ApplicantFooterComponent} from './components/applicant/shared/footer/footer.component'
import { PermanentHeaderComponent} from './components/permenent_staff/shared/header/header.component'
import {PermanentFooterComponent} from './components/permenent_staff/shared/footer/footer.component';
import { VacancyDetailComponent } from './components/applicant/vacancy-detail/vacancy-detail.component';
import { ApplicantUnitHistoryComponent } from './components/applicant/applicant-unit-history/applicant-unit-history.component';
import { ApplicantProfileDetailsComponent } from './components/applicant/applicant-profile-details/applicant-profile-details.component';
import { ApplicantAcademicDetailsComponent } from './components/applicant/applicant-academic-details/applicant-academic-details.component';
import { ApplicantClassPreferencesComponent } from './components/applicant/applicant-class-preferences/applicant-class-preferences.component';
import { ManageUnitsComponent } from './components/permenent_staff/manage-units/manage-units.component';
import { ViewApplicationsComponent } from './components/permenent_staff/view-applications/view-applications.component';
import { ReviewApplicationsComponent } from './components/permenent_staff/review-applications/review-applications.component';
import { PrivacyStatementComponent } from './components/shared/privacy-statement/privacy-statement.component';
import { LoginComponent } from './components/shared/login/login.component';
import { TermsAndConditionsComponent } from './components/shared/terms-and-conditions/terms-and-conditions.component'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
