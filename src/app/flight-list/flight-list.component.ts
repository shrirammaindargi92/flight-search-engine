import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import * as moment from 'moment';

import { FlightDataService } from '../shared/services/flight-data/flight-data.service';
import { Filter } from '../shared/models/filter';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit, OnChanges {

  public tripData: Array<any>;
  public trips: Array<any>;
  public filteredTrips: Array<any> = [];
  public noRecordsFoundFlag = false;
  public showdetailsHeader = false;

  @Input() public filterToList: Filter;
  @Input() public changedSlicerValue: number;

  constructor(private readonly flightDataService: FlightDataService) { }

  ngOnInit() {
    this.populateTrips();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterToList'] && changes['filterToList'].currentValue) {
      this.filterToList = changes['filterToList'].currentValue;
      this.populateFilteredTrips();
        this.noRecordsFoundFlag = (this.trips.length <= 0) ? true : false;
        this.showdetailsHeader = true;
    }
    if (changes['changedSlicerValue'] && changes['changedSlicerValue'].currentValue) {
      this.changedSlicerValue = changes['changedSlicerValue'].currentValue;
      this.populateFilteredTrips(); // you can call populateFIlteredTripsBySlicer to make slicer work seperatly
        this.noRecordsFoundFlag = (this.trips.length <= 0) ? true : false;
    }
  }

  public populateTrips(): void {
    this.flightDataService.getFlights().subscribe((flights: any) => {
      this.trips = this.tripData = flights.results;
    });
  }

  public populateFilteredTrips(): void {
      this.trips = this.tripData.filter((trip) =>
      trip.sourceCity === this.filterToList.sourceCity &&
      trip.destinationCity === this.filterToList.destinationCity &&
      moment(trip.departureDate) >= moment(this.filterToList.departureDate) &&
      trip.fare <= this.changedSlicerValue);
  }

  // uncomment code to make slicer work seperatly
  // public populateFIlteredTripsBySlicer(): void {
  //     this.trips = this.tripData.filter((trip) =>
  //     trip.fare <= this.changedSlicerValue);
  // }
}
