import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, Response } from '@angular/http';
import {Route, RouterModule,Router,ActivatedRoute} from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FlightIndexComponent } from './flight-index/flight-index.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { NgProgressModule } from '@ngx-progressbar/core';

@NgModule({
  declarations: [
    AppComponent,
    FlightIndexComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
