/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipsService } from './tips.service';

describe('Service: Tips', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipsService]
    });
  });

  it('should ...', inject([TipsService], (service: TipsService) => {
    expect(service).toBeTruthy();
  }));
});
