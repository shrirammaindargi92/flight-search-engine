import { Component, OnInit } from '@angular/core';
import { FlightDataService } from '../shared/services/flight-data/flight-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
public cityList: Array<any>;
public maxFlightRangePrice: number = 10000;
public costRange: number;
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
  public submitFilter(filterObject: NgForm): void {
    console.log(filterObject.value);
  }
}
