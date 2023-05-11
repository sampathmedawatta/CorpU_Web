import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { RegistrationComponent } from './components/shared/registration/registration.component';

const routes: Routes = [
  {path: 'Applicant',component: ApplicantComponent},
  {path: 'Registration',component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
