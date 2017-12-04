import { Component, OnInit } from '@angular/core';
import {Route, RouterModule,Router,ActivatedRoute} from '@angular/router'; 
import { FlightServiceService } from '../flight-service.service';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  constructor(private flightServc:FlightServiceService,
    private router: Router ) { }

  ngOnInit() {
  }

}
