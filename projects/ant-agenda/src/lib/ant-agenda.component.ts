import { Component, OnInit } from '@angular/core';
import { AntAgendaService } from './ant-agenda.service'
@Component({
  selector: 'ngx-ant-agenda',
  templateUrl: './ant-agenda.component.html',
  styles: []
})
export class AntAgendaComponent implements OnInit {
  events: any = [];
  constructor(
    private antAgendaService: AntAgendaService
  ) { }

  ngOnInit() {
    this.events = this.antAgendaService.getEvents();
  }

}
