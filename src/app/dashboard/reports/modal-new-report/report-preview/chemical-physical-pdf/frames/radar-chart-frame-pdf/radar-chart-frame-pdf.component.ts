import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radar-chart-frame-pdf',
  templateUrl: './radar-chart-frame-pdf.component.html',
  styleUrls: ['./radar-chart-frame-pdf.component.css']
})
export class RadarChartFramePdfComponent {

  @Input({required:true}) points!: number[]
  @Input({required:true}) minValue!: number
  @Input({required:true}) maxValue!: number

}
