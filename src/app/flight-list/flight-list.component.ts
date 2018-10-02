import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FlightDataService } from '../shared/services/flight-data/flight-data.service';
import { Filter } from '../shared/models/filter';
import * as moment from 'moment';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit, OnChanges {
public trips: Array<any>;
public filteredTrips: Array<any> =[];
public noRecordsFoundFlag = false;
@Input() public filterToList: Filter;
  constructor(private readonly flightDataService: FlightDataService) { }

  ngOnInit() {
    this.populateTrips();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterToList'] && changes['filterToList'].currentValue) {
      this.filterToList = changes['filterToList'].currentValue;
      console.log(this.filterToList);
      // this.ngOnInit();
      this.populateFilteredTrips();
      if(this.trips.length <= 0){
        this.noRecordsFoundFlag = true;
      }
    }
  }
  populateTrips(): void {
    this.flightDataService.getFlights().subscribe((flights: any)=>{
      this.trips = flights.results;
      console.log(this.trips);
    });
  }
  public populateFilteredTrips(): void {
    console.log(moment(this.trips[0].departureDate));
    console.log(this.filterToList.departureDate);
    this.trips = this.trips.filter((trip) =>
    trip.sourceCity === this.filterToList.sourceCity &&
    trip.destinationCity === this.filterToList.destinationCity &&
    moment(trip.departureDate) >= moment(this.filterToList.departureDate));
  }
}
