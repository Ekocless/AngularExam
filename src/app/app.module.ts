import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegionsComponent } from './regions/regions.component';
import { DepartementsComponent } from './departements/departements.component';
import { CommunesComponent } from './communes/communes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    DepartementsComponent,
    CommunesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
