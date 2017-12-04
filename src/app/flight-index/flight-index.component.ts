import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';
import {Route, RouterModule,Router,ActivatedRoute} from '@angular/router'; 
@Component({
  selector: 'app-flight-index',
  templateUrl: './flight-index.component.html',
  styleUrls: ['./flight-index.component.scss'],
  providers:[FlightServiceService]
})
export class FlightIndexComponent implements OnInit {
  sendData;
  resData;
  constructor(private flightServc:FlightServiceService,
    private router: Router       
  ) { }

  ngOnInit() {
  }

  // flightSearch(){
  //   console.log("message");
  //   this.sendData = "adult=1&airline=&app_key=zqJ3R9cGpNWgNXG55ub%2FWQ%3D%3D&arvlDate=&cabinClass=Economy&currency=INR&depDate=20171216&destination=MAA&infant=0&isCacheData=false&isDomestic=false&isDynamicMarkup=false&kid=0&markupAmount=0&origin=BLR&searchkey=&triptype=O";
  //   this.flightServc.flightSearchData(this.sendData).subscribe(response=>{
  //     this.resData = response;
  //     console.log("flight Response",this.resData);
  //     if(this.resData != null){
  //       this.router.navigate(['/flightList']);
  //     }
  //   })
  // }
  flightSearch(){
      console.log("message1");
     this.sendData = "/flightList?adult=1&airline=&app_key=zqJ3R9cGpNWgNXG55ub%2FWQ%3D%3D&arvlDate=&cabinClass=Economy&currency=INR&depDate=20171216&destination=MAA&infant=0&isCacheData=false&isDomestic=false&isDynamicMarkup=false&kid=0&markupAmount=0&origin=BLR&searchkey=&triptype=O";
     this.router.navigateByUrl(this.sendData);
    }   
}
