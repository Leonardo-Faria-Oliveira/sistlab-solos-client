import { TestBed } from '@angular/core/testing';

import { EmployeeLoginFormService } from './employee-login-form.service';

describe('EmployeeLoginFormService', () => {
  let service: EmployeeLoginFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeLoginFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
