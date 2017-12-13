import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, Response } from '@angular/http';
import {Route, RouterModule,Router,ActivatedRoute} from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { FlightIndexComponent } from './flight-index/flight-index.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { FlightBookSummaryComponent } from './flight-book-summary/flight-book-summary.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { NgDatepickerModule } from 'ng2-datepicker';
@NgModule({
  declarations: [
    AppComponent,
    FlightIndexComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    FlightListComponent,
    FlightBookSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgProgressModule.forRoot(),
    FlashMessagesModule.forRoot(),
    Ng2AutoCompleteModule,
    NgDatepickerModule
      
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
