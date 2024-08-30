import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScaleChartsComponent } from 'src/app/components/charts/scale-charts/scale-charts.component';
import { ErrorModalComponent } from 'src/app/components/modals/error-modal.component';

@Component({
  selector: 'app-chemical-attr2-pdf',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    ScaleChartsComponent
  ],
  templateUrl: '../../../../../../../pages/components/modals/report/modal-new-report/report-preview/pdf/frames/chemical-attr2/chemical-attr2-pdf.component.html',
})
export class ChemicalAttr2PdfComponent {
  @Input({required:true}) points!: number[]
  @Input({required:true}) scales!: number[][]
  @Input({required:true}) chartMaxPx!: number
}
