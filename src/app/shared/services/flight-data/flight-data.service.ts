import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subscriber } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  constructor(private readonly httpClient: HttpClient) { }

  public getFlights(): Observable<any> {
    const apiUrl = 'http://localhost:4200/flights';
    return new Observable((subsciber: Subscriber<any>) => {
        this.httpClient.get<any>(apiUrl).subscribe(result => {
            subsciber.next(result);
            subsciber.complete();
        }, (error) => {
            subsciber.error();
            subsciber.complete();
        });

    });
  }

  public getCities(): Observable<any> {
    const apiUrl = 'http://localhost:4200/cities';
    return new Observable((subsciber: Subscriber<any>) => {
        this.httpClient.get<any>(apiUrl).subscribe(result => {
            subsciber.next(result);
            subsciber.complete();
        }, (error) => {
            subsciber.error();
            subsciber.complete();
        });

    });
  }
}
