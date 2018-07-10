import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AntAgendaService {

  constructor() { }

  getEvents() {
    return [{
      title: 'Go to the movie'
    }, {
      title: 'Go to school'
    }, {
      title: 'Back home'
    }]
  }
}
