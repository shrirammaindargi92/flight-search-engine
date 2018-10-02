import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightDataService } from '../shared/services/flight-data/flight-data.service';
import { NgForm } from '@angular/forms';
import { Filter } from '../shared/models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
public sourceCityList: Array<any>;
public destinationCityList: Array<any>;
public flightList: Array<any>;
public maxFlightRangePrice: number = 10000;
public costRange: number;

@Output() public filterChange :EventEmitter<Filter> = new EventEmitter<Filter>();
constructor(private readonly flightDataService: FlightDataService) { }

  ngOnInit() {
    this.populateCityList();
    this.populateFlights();
  }


  public populateCityList(): void {
    this.flightDataService.getCities().subscribe((cities: any) => {
      this.sourceCityList = cities.results;
      console.log(this.sourceCityList);
    });
  }

  public onSelectSourceCity( event: any) :void {
    console.log(event);
  }

  public populateFlights(): Array<any> {
    this.flightDataService.getFlights().subscribe((flights: any) => {
      this.flightList = flights.results;
      console.log(this.flightList);
    });
    return this.flightList;
  }
  public submitFilter(filterObject: NgForm): void {
    console.log(filterObject.value);
    this.filterChange.emit(filterObject.value);
  }
}
