import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSignupEmployeeComponent } from './modal-signup-employee.component';

describe('ModalSignupEmployeeComponent', () => {
  let component: ModalSignupEmployeeComponent;
  let fixture: ComponentFixture<ModalSignupEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSignupEmployeeComponent]
    });
    fixture = TestBed.createComponent(ModalSignupEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
