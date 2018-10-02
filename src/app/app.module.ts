import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ContentComponent } from './content/content.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    FilterComponent,
    ContentComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
