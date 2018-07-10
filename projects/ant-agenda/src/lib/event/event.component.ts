import { Component, OnInit } from '@angular/core';

import { CalendarService } from '../service/calendar.service';

import { Day } from '../model/day.model';
import { Event } from '../model/event.model';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css'],
})

export class EventComponent implements OnInit {

    private events: Event[];
    private selectedDay = new Date();

    constructor(private calendarService: CalendarService) {
    }

    ngOnInit() {
        this.calendarService.getDay().subscribe((day: Day) => {
            this.events = day.events;
            this.selectedDay = day.date;
        })
    }
}