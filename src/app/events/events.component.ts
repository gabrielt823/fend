import { Component, OnInit } from '@angular/core';
//add the event service
import { EventService } from '../event.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  
  //calls events from db.json
  events:[]

  constructor(private eventsService: EventService ) { }

  ngOnInit(): void {
    //calls event db to get available events
    this.eventsService.getEvents()
      .subscribe((res: any ) => {
        //displays events
        this.events = res
      })
  }

}
