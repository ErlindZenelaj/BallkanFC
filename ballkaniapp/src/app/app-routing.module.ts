import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UEFAComponent } from './uefa/uefa.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'homepage', component: HomepageComponent },
  { path: 'uefa', component: UEFAComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
