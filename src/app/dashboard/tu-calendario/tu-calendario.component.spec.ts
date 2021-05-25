import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuCalendarioComponent } from './tu-calendario.component';

describe('TuCalendarioComponent', () => {
  let component: TuCalendarioComponent;
  let fixture: ComponentFixture<TuCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
