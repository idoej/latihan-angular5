import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {BASE_URL} from '../helper';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should success login', () => {
    service.login('user1', 'password1').then(data => {
      expect(data).toBe(true);
    });

    const request = httpMock.expectOne(BASE_URL + '/users?username=user1');
    expect(request.request.method).toBe('GET');
  });

  it('should fail login', () => {
    service.login('user1', 'lalala').then(data => {
      expect(data).toBe(false);
    });

    const request = httpMock.expectOne(BASE_URL + '/users?username=user1');
    expect(request.request.method).toBe('GET');
  });
});
