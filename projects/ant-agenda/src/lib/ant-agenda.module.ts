import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntAgendaComponent } from './ant-agenda.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventComponent } from './event/event.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AntAgendaComponent,
    CalendarComponent,
    EventComponent,
  ],
  exports: [
    AntAgendaComponent
  ]
})
export class AntAgendaModule { }
