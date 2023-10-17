import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homecomponents/header/header.component';
import { MainComponent } from './homecomponents/main/main.component';
import { GalleryComponent } from './homecomponents/gallery/gallery.component';
import { KitsComponent } from './homecomponents/kits/kits.component';
import { FooterComponent } from './homecomponents/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UEFAComponent } from './uefa/uefa.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeagueComponent } from './league/league.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        HomepageComponent,
        LeagueComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        GalleryComponent,
        KitsComponent,
        RouterModule,
        UEFAComponent,
    ]
})
export class AppModule { }
