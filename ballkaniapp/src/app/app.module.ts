import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
