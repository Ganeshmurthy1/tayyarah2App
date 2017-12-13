import { Component, OnInit } from '@angular/core';
import { FlightServiceService } from '../flight-service.service';
import {Route, RouterModule,Router,ActivatedRoute} from '@angular/router'; 
import {NgForm} from '@angular/forms';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder, FormArray, Validators} from '@angular/forms';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
 
@Component({
  selector: 'app-flight-index',
  templateUrl: './flight-index.component.html',
  styleUrls: ['./flight-index.component.scss'],
  providers:[FlightServiceService]
})
export class FlightIndexComponent implements OnInit {
  origin;
  destination;
  departure;
  arrival;
  sendData;
  resData;
  depDate: Date;
  arrivalDate: Date;
  // options: DatepickerOptions = {
  //   minYear: 1970,
  //   maxYear: 2030,
  //   displayFormat: 'MMM DD YYYY',
  //   barTitleFormat: 'MMMM YYYY',
  //   firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  //   locale: frLocale
  // };
 
  options: DatepickerOptions = {
     locale: enLocale, 
     displayFormat: 'DD/MM/YYYY'
    
  };
  
  
  constructor(private flightServc:FlightServiceService,
    private router: Router       
  ) {
    this.depDate = new Date();
    this.arrivalDate = new Date();
   }

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
  flightSearch(data:NgForm){
      console.log("arrivalDate",this.yyyymmddFormat(data.value.arrivalDate));
      console.log("departDate",this.yyyymmddFormat(data.value.departDate));
     
     this.sendData = "/flightList?adult=1&airline=&app_key=zqJ3R9cGpNWgNXG55ub%2FWQ%3D%3D&arvlDate=&cabinClass=Economy&currency=INR&depDate="+this.yyyymmddFormat(data.value.departDate)+"&destination="+this.destination+"&infant=0&isCacheData=false&isDomestic=false&isDynamicMarkup=false&kid=0&markupAmount=0&origin="+this.origin+"&searchkey=&triptype=O";
     this.router.navigateByUrl(this.sendData);
    }   
    arrayOfStrings = ['BLR', 'MAA', 'DEL', 'ASD', 'ASE', 'ACC'];
    originChanged(ori) {
      this.origin = ori;
     
    }
    destChanged(dest) {
       this.destination = dest;
      
    }
    yyyymmddFormat(dateIn) {
      var yyyy = dateIn.getFullYear();
      var mm = dateIn.getMonth()+1; // getMonth() is zero-based
      var dd  = dateIn.getDate();
      return String(10000*yyyy + 100*mm + dd); // Leading zeros for mm and dd
    }

}
