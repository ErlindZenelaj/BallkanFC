import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UEFAComponent } from './uefa/uefa.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeagueComponent } from './league/league.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'uefa', component: UEFAComponent },
  { path: 'league', component: LeagueComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
