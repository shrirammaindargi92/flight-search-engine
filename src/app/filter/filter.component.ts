import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../shared/services/flight-data/flight-data.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
public cityList: Array<any>;
  constructor(private readonly flightDataService: FlightDataService) { }

  ngOnInit() {
this.populateCityList();
  }


  public populateCityList(): Array<any> {
    this.flightDataService.getFlights().subscribe((flightList: any) => {
      this.cityList = flightList.results;
      console.log(this.cityList);
    });
    return this.cityList;
  }
}
