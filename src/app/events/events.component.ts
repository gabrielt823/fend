import { Component, OnInit } from '@angular/core';
//add the event service
import { EventService } from '../event.service';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  //stores list of events
  events = []

  //inject event service
  constructor(private _eventService: EventService, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    //fetchs list of events
    this._eventService.getEvents()
    .subscribe(
      res=> this.events = res,
      err => console.log(err)
    ) 
  }

}
