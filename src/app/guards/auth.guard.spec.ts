import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
