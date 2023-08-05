import { TestBed } from '@angular/core/testing';

import { CaneditGuard } from './canedit.guard';

describe('CaneditGuard', () => {
  let guard: CaneditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CaneditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
