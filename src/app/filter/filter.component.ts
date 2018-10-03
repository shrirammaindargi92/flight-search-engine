import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightDataService } from '../shared/services/flight-data/flight-data.service';
import { NgForm } from '@angular/forms';
import { Filter } from '../shared/models/filter';
import * as moment from 'moment';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
public sourceCityList: Array<any>;
public destinationCityList: Array<any>;
public flightList: Array<any>;
public maxFlightRangePrice = 100000;
public costRange: number;
@Output() public filterChange: EventEmitter<Filter> = new EventEmitter<Filter>();
@Output() public slicerChange: EventEmitter<number> = new EventEmitter<number>();
constructor(private readonly flightDataService: FlightDataService) { }

  ngOnInit() {
    this.populateCityList();
    this.populateFlights();
  }


  public populateCityList(): void {
    this.flightDataService.getCities().subscribe((cities: any) => {
      this.sourceCityList = cities.results;
    });
  }
  public populateFlights() {
    this.flightDataService.getFlights().subscribe((flights: any) => {
      this.flightList = flights.results;
    });
  }
  public submitFilter(filterObject: NgForm): void {
    this.filterChange.emit(filterObject.value);
  }
  public sourceCitySelection(selectedSourceCity: any): void {
    this.destinationCityList = this.sourceCityList.filter((city) => city.cityName !== selectedSourceCity);
  }
  public onSlicerChange(change: any): void {
    this.slicerChange.emit(change);
  }
}
