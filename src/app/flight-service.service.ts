import { Injectable } from '@angular/core';
import { Http, Response,URLSearchParams,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CommonServiceService } from './common-service.service';
@Injectable()
export class FlightServiceService extends CommonServiceService{

  constructor(private http:Http) {
    super();
 }
 
 flightSearchData(data){
   console.log("serviceData",data);
   return this.http.get(this.url + 'flight/search?'+data)
   .map(res=>res.json())
 }
 flightAirPrice(data){
   return this.http.get(this.url+'airprice/response?'+data)
   .map(res=>res.json())
 }
// flightSearchData(data){  
//   return this.http.get('./assets/flightsearch.json')
//   .map(res=>res.json())
// }
}
