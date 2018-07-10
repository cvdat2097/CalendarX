import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Day } from '../model/day.model';
import { Event } from '../model/event.model';

@Injectable({
    providedIn: 'root',
})

export class CalendarService implements OnInit {
    // Properties
    Days: Day[] = [];
    dayStream = new Subject<Day>();
    dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Methods
    constructor() {
        var event1 = new Event(new Date('7/5/2018 18:00'), new Date('7/5/2018 19:20'), "Clean the house", "Clean within 5 minute", "red");
        var event2 = new Event(new Date('7/5/2018 2:00'), new Date('7/5/2018 9:20'), "Go to school", "Use my dad's car", "blue");
        var event3 = new Event(new Date('7/12/2018 18:00'), new Date('7/12/2018 19:20'), "Examination day", "", "green");

        this.Days.push(new Day(new Date('7/5/2018 18:00'), [event1, event2]));
        this.Days.push(new Day(new Date('7/12/2018 18:00'), [event3]));
    }

    ngOnInit() {
    }

    getMonthMatrix(month: number, year: number): Day[][] {
        var nDaysOfMonth = [31, (new Date(year, 2, 0)).getDate(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        var monthMatrix: Day[][] = [];
        for (var k = 0; k < 5; k++) {
            monthMatrix[k] = [];
        }
        var currentDate = new Date(year, month, 1);
        var firstDayOfMonth = currentDate.getDay();

        for (var i = 0; i < this.Days.length; i++) {
            var thisDate = this.Days[i].date.getDate();
            var thisMonth = this.Days[i].date.getMonth();
            var thisYear = this.Days[i].date.getFullYear();
            if (thisYear == year) {
                var x = this.Days[i].date.getDay();
                var y = Math.floor((this.Days[i].date.getDate() + firstDayOfMonth - 1) / 7);
                if ((thisMonth == month)
                    || (thisMonth == month - 1 && (thisDate - nDaysOfMonth[thisMonth] + firstDayOfMonth > 0))
                    || (thisMonth == month + 1 && (thisDate + nDaysOfMonth[thisMonth - 1] + firstDayOfMonth <= 35))) {

                    monthMatrix[y][x] = this.Days[i];
                }
            }
        }

        // Fill in the blanks in the matrix
        var tempDate = new Date(year, month, 1);
        if (firstDayOfMonth > 0) {
            if (month - 1 < 0) {
                month = 12;
                year--;
            }
            tempDate = new Date(year, month - 1, nDaysOfMonth[month - 1] - firstDayOfMonth + 1);
        }
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 7; j++) {
                if (!monthMatrix[i][j]) {
                    monthMatrix[i][j] = new Day(new Date(tempDate), []);
                }
                tempDate.setDate(tempDate.getDate() + 1);
            }
        }

        return monthMatrix;
    }

    getDay() {
        return this.dayStream;
    }

    getDayName(date: Date): string {
        return this.dayName[date.getDay()];
    }
}