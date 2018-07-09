import { TestBed, inject } from '@angular/core/testing';

import { AntAgendaService } from './ant-agenda.service';

describe('AntAgendaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntAgendaService]
    });
  });

  it('should be created', inject([AntAgendaService], (service: AntAgendaService) => {
    expect(service).toBeTruthy();
  }));
});
