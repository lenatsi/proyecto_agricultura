import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusTareasComponent } from './tus-tareas.component';

describe('TusTareasComponent', () => {
  let component: TusTareasComponent;
  let fixture: ComponentFixture<TusTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
