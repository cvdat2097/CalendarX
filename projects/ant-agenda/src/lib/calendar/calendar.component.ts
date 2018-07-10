import { Component, OnInit, ElementRef } from '@angular/core';

import { CalendarService } from '../service/calendar.service';

import { Day } from '../model/day.model';
import { Event } from '../model/event.model';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
})

export class CalendarComponent implements OnInit {
    // Properties
    monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days: Day[][];
    today: Date;
    currentDate: Date;
    currentSelectedDay: Date;


    // Methods
    constructor(private calendarService: CalendarService) {
        this.currentDate = new Date();
        this.today = new Date(this.currentDate);
        this.currentSelectedDay = new Date(this.currentDate);
    }

    ngOnInit() {
        this.fetchDays();
    }

    fetchDays() {
        this.days = this.calendarService.getMonthMatrix(this.currentDate.getMonth(), this.currentDate.getFullYear());
    }

    goToNextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.fetchDays();
    }

    goToPreviousMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.fetchDays();
    }

    onDaySelected(day: Day) {
        this.calendarService.getDay().next(day);
    }
}