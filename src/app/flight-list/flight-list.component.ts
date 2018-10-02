import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FlightDataService } from '../shared/services/flight-data/flight-data.service';
import { Filter } from '../shared/models/filter';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit,OnChanges {
public trips: Array<any>;
@Input() public filterFromContent: Filter;
  constructor(private readonly flightDataService: FlightDataService) { }

  ngOnInit() {
    this.populateTrips();
    console.log('in flightList');
    console.log(this.filterFromContent);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterFromContent'] && changes['filterFromContent'].currentValue) {
      this.filterFromContent = changes['filterFromContent'].currentValue;
      console.log(this.filterFromContent, 'in flightList');
      this.ngOnInit();
    }
  }
  populateTrips(): void {
    this.flightDataService.getFlights().subscribe((flights: any)=>{
      this.trips = flights.results;
      console.log(this.trips);
    });
  }
}
