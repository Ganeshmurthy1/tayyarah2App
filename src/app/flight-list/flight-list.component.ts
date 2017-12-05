import { Component, OnInit } from '@angular/core';
import {Route, RouterModule,Router,ActivatedRoute} from '@angular/router'; 
import { FlightServiceService } from '../flight-service.service';
import { NgProgress } from '@ngx-progressbar/core';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
  providers:[FlightServiceService]
})
export class FlightListComponent implements OnInit {
  adult;
  airline;
  app_key;
  arvlDate;
  cabinClass;
  currency;
  depDate;
  destination;
  infant;
  isCacheData;
  isDomestic;
  isDynamicMarkup;
  kid;
  markupAmount;
  origin;
  searchkey;
  triptype;
 ApiDataConstruct;
 flightSearchData;
 flightList = new Array();
 public loader= false;
  constructor(private flightServc:FlightServiceService,
    private router: Router ,
    private actRoute: ActivatedRoute,
    public progress: NgProgress) { }

  ngOnInit() {
    this.actRoute
    .queryParams
    .subscribe(params => {
      
         this.adult = params['adult'];
         this.airline = params['airline'];
         this.app_key = params['app_key'];
         this.arvlDate = params['arvlDate'];
         this.cabinClass = params['cabinClass'];        
         this.currency = params['currency'];        
         this.depDate = params['depDate'];        
         this.destination = params['destination'];        
         this.infant = params['infant'];        
         this.isCacheData = params['isCacheData'];        
         this.isDomestic = params['isDomestic'];        
         this.isDynamicMarkup = params['isDynamicMarkup'];        
         this.kid = params['kid'];        
         this.markupAmount = params['markupAmount'];        
         this.origin = params['origin'];        
         this.searchkey = params['searchkey'];        
         this.triptype = params['triptype'];
      
        this.ApiDataConstruct = 'adult='+this.adult+'&airline='+this.airline+'&app_key='+this.app_key+'&arvlDate='+this.arvlDate+'&cabinClass='+this.cabinClass+
                                  '&currency='+this.currency+'&depDate='+this.depDate+'&destination='+this.destination+'&infant='+this.infant+'&isCacheData='+this.isCacheData+
                                  '&isDomestic='+this.isDomestic+'&isDynamicMarkup='+this.isDynamicMarkup+'&kid='+this.kid+'&markupAmount='+this.markupAmount+'&origin='+this.origin+
                                  '&searchkey='+this.searchkey+'&triptype='+this.triptype;
      
        this.searcApiCall();
      });
  }

  searcApiCall(){
    this.loader = true;
    this.progress.start();
console.log('Api send Data',this.ApiDataConstruct);
this.flightServc.flightSearchData(this.ApiDataConstruct).subscribe(response=>{
   this.progress.done();
  this.loader = false;
  this.flightSearchData = response;
  console.log('Api send response',response);
this.flightList = this.flightSearchData.fareFlightSegment;
})
  }
}
