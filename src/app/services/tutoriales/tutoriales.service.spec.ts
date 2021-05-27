/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TutorialesService } from './tutoriales.service';

describe('Service: Tutoriales', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorialesService]
    });
  });

  it('should ...', inject([TutorialesService], (service: TutorialesService) => {
    expect(service).toBeTruthy();
  }));
});
