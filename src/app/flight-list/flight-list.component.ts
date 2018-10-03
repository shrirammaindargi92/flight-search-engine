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
@Input() public changedSlicerValue: number;
  constructor(private readonly flightDataService: FlightDataService) { }

  ngOnInit() {
    this.populateTrips();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterToList'] && changes['filterToList'].currentValue) {
      this.filterToList = changes['filterToList'].currentValue;
      console.log(this.filterToList);
      this.populateFilteredTrips();
        this.noRecordsFoundFlag = (this.trips.length <= 0) ? true: false;
    }
    if (changes['changedSlicerValue'] && changes['changedSlicerValue'].currentValue) {
      this.changedSlicerValue = changes['changedSlicerValue'].currentValue;
      console.log(this.changedSlicerValue);
      this.populateFIlteredTripsBySlicer();
        this.noRecordsFoundFlag = (this.trips.length <= 0) ? true: false;
    }
  }
  populateTrips(): void {
    this.flightDataService.getFlights().subscribe((flights: any)=>{
      this.trips = flights.results;
      console.log(this.trips);
    });
  }
  public populateFilteredTrips(): void {
    if(this.trips.length>0){
      this.trips = this.trips.filter((trip) =>
      trip.sourceCity === this.filterToList.sourceCity &&
      trip.destinationCity === this.filterToList.destinationCity &&
      moment(trip.departureDate) >= moment(this.filterToList.departureDate));
    }
  }
  public populateFIlteredTripsBySlicer():void {
    if(this.trips.length>0){
      this.trips = this.trips.filter((trip) =>
      trip.fare <= this.changedSlicerValue);
    }
  }
}
