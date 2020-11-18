import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class EventService {

  //makes an http post request to backend 
  private _eventsUrl = 'http://localhost:4000/events'

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any>{
    return this.http.get(this._eventsUrl)
      .pipe(map( (res: any) => {
        return res;
      }));
  }

  addEvent(eventData){
    return this.http.post(this._eventsUrl, eventData)
      .pipe(map((res: any) => {
        return res;
      }));
  }

 
}