import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntAgendaComponent } from './ant-agenda.component';

describe('AntAgendaComponent', () => {
  let component: AntAgendaComponent;
  let fixture: ComponentFixture<AntAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
