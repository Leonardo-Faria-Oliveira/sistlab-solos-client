import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScaleChartsComponent } from 'src/app/components/charts/scale-charts/scale-charts.component';
import { ErrorModalComponent } from 'src/app/components/modals/error-modal.component';

@Component({
  selector: 'app-technical-signature',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    ScaleChartsComponent
  ],
  templateUrl: '../../../../../../../pages/components/modals/report/modal-new-report/report-preview/preview/frames/signature/technical-signature.component.html',
})
export class TechnicalSignatureComponent {

  @Input({required:true}) technicalName!: string
  @Input({required:true}) crea!: string



}
