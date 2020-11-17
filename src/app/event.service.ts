import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class EventService {

  //calls event api
  private _eventsUrl = "http://localhost:3000/api/events";

  constructor(private http: HttpClient) { }

    getEvents() {
      return this.http.get<any>(this._eventsUrl)
    }

  
 
}