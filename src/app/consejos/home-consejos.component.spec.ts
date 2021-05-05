import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConsejosComponent } from './home-consejos.component';

describe('HomeConsejosComponent', () => {
  let component: HomeConsejosComponent;
  let fixture: ComponentFixture<HomeConsejosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConsejosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConsejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
