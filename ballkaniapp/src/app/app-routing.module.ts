import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UEFAComponent } from './uefa/uefa.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeagueComponent } from './league/league.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'league', component: LeagueComponent },
  { path: 'uefa', component: UEFAComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'news', component: NewsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
