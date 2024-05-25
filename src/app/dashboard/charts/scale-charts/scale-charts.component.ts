import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale-charts',
  templateUrl: './scale-charts.component.html',
  styleUrls: ['./scale-charts.component.css']
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
    let aux = this.chartMaxPx * data
    let res =  aux / this.scale[this.scale.length - 1]
    const element = document.getElementById(id);
    if (element) {

      let pos = res / 16
      console.log("med:"+ pos)
      element.style.marginLeft = `${pos}rem`;
      
    }

    
    
  }


  public setChartWidth(id:string, width:number){
    const element = document.getElementById(id);
    if (element) {
      // Suponha que você queira aumentar a largura em 50 pixels

      element.style.width = `${width/16}rem`;
    }
  }

  ngOnInit(): void {
    console.log(this.chartMaxPx)
    setTimeout(() => this.setChartWidth(this.chartId, this.chartMaxPx), 5)
    setTimeout(() => this.calcDataPosition(this.pointId, this.point), 5)
  }

  

}
