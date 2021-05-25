import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuHuertoComponent } from './tu-huerto.component';

describe('TuHuertoComponent', () => {
  let component: TuHuertoComponent;
  let fixture: ComponentFixture<TuHuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuHuertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuHuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
