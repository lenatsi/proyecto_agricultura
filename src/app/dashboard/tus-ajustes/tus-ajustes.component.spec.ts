import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusAjustesComponent } from './tus-ajustes.component';

describe('TusAjustesComponent', () => {
  let component: TusAjustesComponent;
  let fixture: ComponentFixture<TusAjustesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusAjustesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusAjustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
