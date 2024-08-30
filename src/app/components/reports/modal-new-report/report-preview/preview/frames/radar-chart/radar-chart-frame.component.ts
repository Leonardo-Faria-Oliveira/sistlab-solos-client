import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RadarChartComponent } from 'src/app/components/charts/radar-chart/radar-chart.component';
import { ErrorModalComponent } from 'src/app/components/modals/error-modal.component';

@Component({
  selector: 'app-radar-chart-frame',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    RadarChartComponent
  ],
  templateUrl: '../../../../../../../pages/components/modals/report/modal-new-report/report-preview/preview/frames/radar-chart/radar-chart-frame.component.html',
})
export class RadarChartFrameComponent {

  @Input({required:true}) points!: number[]
  @Input({required:true}) minValue!: number
  @Input({required:true}) maxValue!: number

}
