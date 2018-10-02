import { Component, OnInit } from '@angular/core';
import { Filter } from '../shared/models/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
public filterToList: Filter;
  constructor() { }

  ngOnInit() {
  }
  public filterReceived(event: any):void {
    debugger
    this.filterToList = event;
  }

}
