import { Component, OnInit } from '@angular/core';
import {Route, RouterModule,Router,ActivatedRoute} from '@angular/router'; 
import { FlightServiceService } from '../flight-service.service';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-flight-book-summary',
  templateUrl: './flight-book-summary.component.html',
  styleUrls: ['./flight-book-summary.component.scss'],
  providers:[FlightServiceService]
})
export class FlightBookSummaryComponent implements OnInit {
apiData;
appkey;
flightindex;
  constructor(private flightServc:FlightServiceService,
    private router: Router ,
    private actRoute: ActivatedRoute,
    public progress: NgProgress) { }

  ngOnInit() {
    this.actRoute.queryParams
    .subscribe(params=>{
      this.appkey = params['appKey'];


      this.getAirpriceSummary();
    })
  }

  getAirpriceSummary(){
    this.apiData = "";
  }
}
