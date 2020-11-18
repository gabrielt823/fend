import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EventService } from '../../event.service';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {

  //add form group
  addForm: FormGroup
  //eAdded boolean value to confirm event addition
  eAdded: boolean

  constructor(private eventsService: EventService) { }

  ngOnInit(): void {
    //
    this.addForm = new FormGroup(
      {
        //event fields
        title: new FormControl('', Validators.required),
        desc: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required),
        location: new FormControl('', Validators.required),
        img: new FormControl('', Validators.required)
      })
  }

  addEventHandler() {
    //calls the events service
    this.eventsService.addEvent(this.addForm.value)
      .subscribe((res: any) => {
        //submit adds the event 
        this.eAdded = true;
      });
  }
}