import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LabsService } from '../dashboard/labs/labs.service';
import { Lab } from '../models/lab';
import { Address } from '../models/address';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(
    private labsService : LabsService,
  ){}

  public step: 1 | 2 | 3 | 4 = 1;

  @Output() modalSignUpLab = new EventEmitter<boolean>();
  @Output() labOutputForm = new EventEmitter();
  @Output() functionEmitter = new EventEmitter();

  public hasError:boolean = false;
  public error:{ errorCode: number; errorMessage: string } | null = null;
 
  public labSignUpForm = new FormGroup({
    name: new FormControl<string | undefined>(undefined),
    email: new FormControl<string | undefined>(undefined),
    contact: new FormControl<string | undefined>(undefined),
    zipcode: new FormControl<string | undefined>(undefined),
    city: new FormControl<string | undefined>(undefined),
    street: new FormControl<string | undefined>(undefined),
    bairro: new FormControl<string | undefined>(undefined),
    number: new FormControl<string | undefined>(undefined),
    employee_name: new FormControl<string | undefined>(undefined),
    employee_email: new FormControl<string | undefined>(undefined),
    employee_contact: new FormControl<string | undefined>(undefined),
    job: new FormControl<string | undefined>(undefined),
    password: new FormControl<string | undefined>(undefined),
    confirm_password: new FormControl<string | undefined>(undefined),
  });

  public createLab() {
    const lab = new Lab(
      this.labSignUpForm.value.name!,
      this.labSignUpForm.value.email!,
      new Address(
        parseInt(this.labSignUpForm.value.zipcode!),
        this.labSignUpForm.value.city!,
        parseInt(this.labSignUpForm.value.number!),
      ),
      new Employee(
        this.labSignUpForm.value.employee_name!,
        this.labSignUpForm.value.employee_email!,
        this.labSignUpForm.value.password!,
        this.labSignUpForm.value.job!,
        "labEmployeeAdmin",
        "",
        this.labSignUpForm.value.employee_contact
      ),
      this.labSignUpForm.value.contact
    );
    console.log(lab);
    this.labsService.createLab(lab);
  }

  public validateBeforeCreateLab() {
    if (this.labSignUpForm.valid && this.labSignUpForm.value.password === this.labSignUpForm.value.confirm_password) {
      this.createLab();
    } else if (this.labSignUpForm.value.password !== this.labSignUpForm.value.confirm_password) {
      this.setHasError(true);
      this.setError({
        errorCode: 400,
        errorMessage: "As senhas não coincidem"
      });
      setTimeout(() => this.setHasError(false), 2000);
    } else {
      this.setHasError(true);
      this.setError({
        errorCode: 400,
        errorMessage: "Insira dados válidos"
      });
      setTimeout(() => this.setHasError(false), 2000);
    }
  }

  public setModalSignUpLab(event:boolean) {
    this.modalSignUpLab.emit(event);
  }

  public emitForm() {
    this.labOutputForm.emit(this.labSignUpForm);
  }

  public setHasError(hasError:boolean) {
    this.hasError = hasError;
  }

  public setError(error:{errorCode: number; errorMessage: string} | null) {
    this.error = error;
  }

  public next(form: FormGroup): void {
    if (form) {
      this.labSignUpForm.patchValue(form.value);
    }
    this.step++;
  }

  public back(): void {
    this.step--;
  }
}
