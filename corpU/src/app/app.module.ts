import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { ApplicantUnitHistoryComponent } from './applicant-unit-history/applicant-unit-history.component';
import { ApplicantProfileDetailsComponent } from './applicant-profile-details/applicant-profile-details.component';
import { ApplicantAcademicDetailsComponent } from './applicant-academic-details/applicant-academic-details.component';
import { ApplicantClassPreferencesComponent } from './applicant-class-preferences/applicant-class-preferences.component'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
