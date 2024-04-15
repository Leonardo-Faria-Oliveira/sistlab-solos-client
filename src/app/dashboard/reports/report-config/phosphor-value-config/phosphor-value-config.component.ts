import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChartType, Row, Column, GoogleChartComponent } from 'angular-google-charts';
import { DataTableService } from 'angular-google-charts/lib/services/data-table.service';

@Component({
  selector: 'app-phosphor-value-config',
  templateUrl: './phosphor-value-config.component.html',
  styleUrls: ['./phosphor-value-config.component.css']
})
export class PhosphorValueConfigComponent {

  @Output() modalReportConfig = new EventEmitter<number>();

  public formattedValues: (string | number)[][] | undefined

  public phosphorValue:number = 0

  public values:Array<number> = new Array<number>()

  public type:ChartType = ChartType.LineChart

  public chartData:Row[] | null = null

  public options = {
    areaOpacity: 0,
    legend: 'none',
    hAxis: { 
      maxValue: 160 
    },
    width: 540,
    lineWidth: 2, 
    fillOpacity: 0,
    height: 408,
    labels: " ",
    chartArea: { 
      width: 550,
      height: 500 
    },
    vAxis: { 
      maxValue: 70,
      gridlines: { 
        count: 0 
      },
      textStyle: {
        color: '#fff' 
      }
    },
    colors: ['green']
  };
  
  public data:Array<number> = new Array<number>()

  public hasChart:boolean = false

  public phosphorValueForm = new FormGroup({
    y1: new FormControl<string | undefined>(undefined),
    y2: new FormControl<string | undefined>(undefined),
    y3: new FormControl<string | undefined>(undefined),
    y4: new FormControl<string | undefined>(undefined),
    y5: new FormControl<string | undefined>(undefined),
    x1: new FormControl<string | undefined>("10"),
    x2: new FormControl<string | undefined>("20"),
    x3: new FormControl<string | undefined>("40"),
    x4: new FormControl<string | undefined>("80"),
    x5: new FormControl<string | undefined>("160")
  })

  public hasFilledValues(){
    if(this.phosphorValueForm.value.y1 !== null
      && this.phosphorValueForm.value.y2 !== null
      && this.phosphorValueForm.value.y3 !== null
      && this.phosphorValueForm.value.y4 !== null
      && this.phosphorValueForm.value.y5 !== null
    ){
      this.hasChart = true      
      this.pushCalcValues()
      this.phosphorValue = this.getPhosphorValues()
    }
  }

  public setModalReportConfig(){
    this.modalReportConfig.emit(1)
  }

  public calcValue(x:number, y:number){
    return x / (2 -(Math.log10(y)))
  }

  public pushCalcValues(){
    this.values.push(this.calcValue(parseFloat(this.phosphorValueForm.value.x1!), parseFloat(this.phosphorValueForm.value.y1!)))
    this.values.push(this.calcValue( parseFloat(this.phosphorValueForm.value.x2!), parseFloat(this.phosphorValueForm.value.y2!)))
    this.values.push(this.calcValue( parseFloat(this.phosphorValueForm.value.x3!), parseFloat(this.phosphorValueForm.value.y3!)))
    this.values.push(this.calcValue( parseFloat(this.phosphorValueForm.value.x4!), parseFloat(this.phosphorValueForm.value.y4!)))
    this.values.push(this.calcValue( parseFloat(this.phosphorValueForm.value.x5!), parseFloat(this.phosphorValueForm.value.y5!)))
    this.formattedValues = this.values.map((value, index) => {
      return [``, value]; // Supõe-se que cada valor tenha um rótulo
    });
  }


  public getPhosphorValues(){
    let calc =  this.values.reduce((acc, currentValue) => {
      return acc + currentValue
    }, 0);
    return calc / 5
  }


}
