import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightIndexComponent } from './flight-index/flight-index.component';
import { AboutComponent } from './about/about.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightBookSummaryComponent } from './flight-book-summary/flight-book-summary.component';
const routes: Routes = [
  { path:'',
    component:FlightIndexComponent,
    pathMatch: 'full'
  },
  { path:'about',
    component:AboutComponent,
    pathMatch: 'full'
  },
  { path:'flightList',
  component:FlightListComponent,
  pathMatch: 'full'
  },
  { path:'flightSummary',
  component:FlightBookSummaryComponent,
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
