import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-scale-charts',
  standalone: true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: '../../../pages/components/charts/scale-charts/scale-charts.component.html',
  styleUrls: ['../../../pages/components/charts/scale-charts/scale-charts.component.css']
})
export class ScaleChartsComponent implements OnInit {

  @Input({required:true}) chartId!: string
  @Input({required:true}) pointId!: string
  @Input({required:true}) point!: number
  @Input({required:true}) scale!: number[]
  @Input({required:true}) chartMaxPx!: number

  public isHidden:boolean = false

  public calcDataPosition(id:string, data:number){
    
    if(data < 0){
      this.isHidden = true
    }

    let a = this.scale[0] * data
    // let aux = this.chartMaxPx * data
    let res =  a / this.chartMaxPx

    if(res < this.scale[this.scale.length - 1]){
      res = this.scale[this.scale.length - 1]
    }

    if(res > this.scale[0]){
      res = this.scale[0]
    }
    const element = document.getElementById(id);
    if (element) {

      let pos = res
      
      element.style.marginLeft = `${pos}px`;
      
    }

  }

  public setChartWidth(id:string, width:number){
    const element = document.getElementById(id);
    if (element) {

      element.style.width = `${width}px`;
    }
  }

  ngOnInit(): void {
    console.log(

      this.chartId,
      this.pointId,
      this.point,
      this.scale,
      this.chartMaxPx
    )


    setTimeout(() => this.setChartWidth(this.chartId, this.chartMaxPx), 5)
    setTimeout(() => this.calcDataPosition(this.pointId, this.point), 5)
  }

}
