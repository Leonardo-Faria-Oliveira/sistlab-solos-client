import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radar-chart-frame',
  templateUrl: './radar-chart-frame.component.html',
  styleUrls: ['./radar-chart-frame.component.css']
})
export class RadarChartFrameComponent {

  @Input({required:true}) points!: number[]
  @Input({required:true}) minValue!: number
  @Input({required:true}) maxValue!: number

}
