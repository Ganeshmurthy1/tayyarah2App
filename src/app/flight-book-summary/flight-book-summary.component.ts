import { Component, OnInit } from '@angular/core';
import {Route, RouterModule,Router,ActivatedRoute} from '@angular/router'; 
import { FlightServiceService } from '../flight-service.service';
import { NgProgress } from '@ngx-progressbar/core';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-flight-book-summary',
  templateUrl: './flight-book-summary.component.html',
  styleUrls: ['./flight-book-summary.component.scss'],
  providers:[FlightServiceService]
})
export class FlightBookSummaryComponent implements OnInit {
apiData;
appkey;
islowfare;
lowfareflightindex1;
lowfareflightindex2;
reasontoselect;
searchkey;
flightindex;

  constructor(private flightServc:FlightServiceService,
    private router: Router ,
    private actRoute: ActivatedRoute,
    public progress: NgProgress) { }

  ngOnInit() {
    this.actRoute.queryParams
    .subscribe(params=>{
      this.appkey = params['app_key'];
      this.flightindex = params['flightindex'];
      this.islowfare = params['islowfare'];
      this.lowfareflightindex1 = params['lowfareflightindex1'];
      this.lowfareflightindex2 = params['lowfareflightindex2'];
      this.reasontoselect = params['reasontoselect'];
      this.searchkey = params['searchkey'];
      this.apiData = 'app_key='+this.appkey+'&flightindex='+this.flightindex+'&islowfare='+this.islowfare+'&lowfareflightindex1='+this.lowfareflightindex1+'&lowfareflightindex2='+this.lowfareflightindex2+'&reasontoselect='+this.reasontoselect+'&searchkey='+this.searchkey;
      this.getAirpriceSummary();
    })
  }

  getAirpriceSummary(){
    this.progress.start();
    this.flightServc.flightAirPrice(this.apiData).subscribe(response=>{
      this.progress.done();
      console.log("Response",response);
    })
  }
  
}
