import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderConfigService } from '../../../../services/header-config.service';
import { catchError, throwError } from 'rxjs';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from 'src/app/components/modals/error-modal.component';

@Component({
  selector: 'app-header-config',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
  ],
  templateUrl: '../../../../pages/components/modals/report/report-config/header-config/header-config.component.html',
  styleUrls: ['../../../../pages/components/modals/report/report-config/header-config/header-config.component.css']
})
export class HeaderConfigComponent {

  constructor(
    private headerConfigService : HeaderConfigService,
  ){}

  @Output() modalReportConfig = new EventEmitter<number>();

  
  public hasSuccess:boolean = false
  public hasError:boolean = false
  public error:ErrorHandler | null = null 

  public isLoading:boolean = false

  public hasUploaded:boolean = false

  public headerForm = new FormGroup({
    header1: new FormControl(),
    header2: new FormControl(),
    header3: new FormControl(),
  })

  public setHasError(hasError:boolean){
    this.hasError = hasError
  }

  public setError(error:ErrorHandler | null){
    this.error = error
  }

  public setModalReportConfig(){
    this.modalReportConfig.emit(1)
  }

  public setHasUploaded(){
    if(this.headerForm.value.header1 !== null 
      || this.headerForm.value.header2 !== null
      || this.headerForm.value.header3 !== null 
    ){
      this.hasUploaded = true
    }
  }

  public onFileSelected(event:Event, controlName:string){
    this.setHasUploaded()
    const file = (event.target as HTMLInputElement).files![0]
    if(file){
      console.log(file)
      this.headerForm.get(controlName)?.setValue(file);
    }

  }

  public addHeaders(){
    this.isLoading = true
    if(
      (this.headerForm.value.header1 === undefined || this.headerForm.value.header1 === null)
      && 
      (this.headerForm.value.header2 === undefined || this.headerForm.value.header2 === null)
      && 
      (this.headerForm.value.header3 === undefined || this.headerForm.value.header3 === null)
    ){
      this.isLoading = false
      this.setHasError(true);
      this.setError({
        errorCode: 400,
        errorMessage: "Preencha pelo menos um campo" 
      })
      setTimeout(() => this.setHasError(false), 2000)
  
    }else{

      this.headerConfigService.addHeaders([
        this.headerForm.get("header1")?.value, 
        this.headerForm.get("header2")?.value, 
        this.headerForm.get("header3")?.value
      ])
      .pipe(catchError(err => {
        this.setHasError(true);
        this.setError({
          errorCode: 400,
          errorMessage: err.message 
        })
        setTimeout(() => this.setHasError(false), 2000)
        return throwError(() => new Error(err));
      }))
      .subscribe(res => {

        this.hasSuccess = true
        this.isLoading = false
        setTimeout(() => this.hasSuccess =false , 2000)
        setTimeout(() => this.setModalReportConfig() , 1000)

      })

    }

    

  }

  
}
