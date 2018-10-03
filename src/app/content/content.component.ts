import { Component, OnInit } from '@angular/core';
import { Filter } from '../shared/models/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
public filterToList: Filter;
public changedSlicerValue: number;

  constructor() { }

  ngOnInit() {}

  public filterReceived(event: Filter): void {
    this.filterToList = new Filter(
      event.sourceCity,
      event.destinationCity,
      event.departureDate,
      event.passengers,
      event.returnDate
    );
  }

  public slicerChangeReceiver(event: any): void {
    this.changedSlicerValue = event;
  }

}
