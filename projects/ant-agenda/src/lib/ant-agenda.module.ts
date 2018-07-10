import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntAgendaComponent } from './ant-agenda.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventComponent } from './event/event.component';
import { CalendarService } from '../lib/service/calendar.service';
import { EventColorDirective } from './shared/eventcolor.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AntAgendaComponent,
    CalendarComponent,
    EventComponent,
    EventColorDirective
  ],
  exports: [
    AntAgendaComponent
  ],
  providers: [CalendarService],
})
export class AntAgendaModule { }
