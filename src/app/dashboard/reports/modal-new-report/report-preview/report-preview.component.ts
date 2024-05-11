import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as d3 from 'd3';
import { Employee } from 'src/app/models/employee';
import { Report } from 'src/app/models/report';

@Component({
  selector: 'app-report-preview',
  templateUrl: './report-preview.component.html',
  styleUrls: ['./report-preview.component.css']
})
export class ReportPreviewComponent implements OnInit{

  @Input({required:true}) clientName:string | undefined

  @Input({required:true}) city:string | undefined

  @Input({required:true}) depth:number | undefined

  @Input({required:true}) landName:string | undefined

  @Input({required:true}) reportDate:string | undefined

  @Input({required:false}) report:Report | undefined

  public chartMaxPx:number = 75.2

  public chemicalAttr1Scales:number[][] = new Array<number[]>()
  public chemicalAttr1Points:number[] = new Array<number>()

  public physicalAttrScales:number[][] = new Array<number[]>()
  public physicalAttrPoints:number[] = new Array<number>()

  public technicalResponsible:Employee = new Employee(
    "Eduarda Satie",
    "",
    "",
    "",
    "",
    "46787652"
  )

  public chemicalAttr2Scales:number[][] = new Array<number[]>()
  public chemicalAttr2Points:number[] = new Array<number>()

  public radarChartAttrMinScaleValue:number | undefined
  public radarChartAttrMaxScaleValue:number |undefined
  public radarChartAttrPoints:number[] = new Array<number>()

  @Input({required:true}) hasMicronutrients:boolean = false
  @Output() backEmitter = new EventEmitter<void>();
  @Output() doubleBackEmitter = new EventEmitter<void>();


  public back(){
    this.backEmitter.emit()
  }

  public doubleBack(){
    this.doubleBackEmitter.emit()
  }

  public getChemicalAttr1s(){

    this.chemicalAttr1Scales.push([0, 2, 4, 6, 8, 10])
    this.chemicalAttr1Scales.push([0, 2, 4, 6, 8, 10])
    this.chemicalAttr1Scales.push([0, 2, 4, 6, 8, 10])
    this.chemicalAttr1Scales.push([0, 0.4, 1.65, 2.35, 3.5])

    this.chemicalAttr1Points.push(4.3)
    this.chemicalAttr1Points.push(2)
    this.chemicalAttr1Points.push(9.6)
    this.chemicalAttr1Points.push(1.65)

  }

  public getPhysicalAttrs(){

    this.physicalAttrScales.push([0, 2, 4, 6, 8, 10])
    this.physicalAttrScales.push([0, 2, 4, 6, 8, 10])
    this.physicalAttrScales.push([0, 2, 4, 6, 8, 10])
    this.physicalAttrScales.push([0, 0.4, 1.65, 2.35, 3.5])
    this.physicalAttrScales.push([0, 2, 4, 6, 8, 10])

    this.physicalAttrPoints.push(4.3)
    this.physicalAttrPoints.push(2)
    this.physicalAttrPoints.push(9.6)
    this.physicalAttrPoints.push(1.65)
    this.physicalAttrPoints.push(5.4)

  }

  public getChemicalAttr2s(){

    this.chemicalAttr2Scales.push([0, 2, 4, 6, 8, 10])
    this.chemicalAttr2Scales.push([0, 2, 4, 6, 8, 10])
    this.chemicalAttr2Scales.push([0, 2, 4, 6, 8, 10])
    this.chemicalAttr2Scales.push([0, 0.4, 1.65, 2.35, 3.5])
    this.chemicalAttr2Scales.push([0, 2, 4, 6, 8, 10])
    this.chemicalAttr2Scales.push([0, 2, 4, 6, 8, 10])

    this.chemicalAttr2Points.push(4.3)
    this.chemicalAttr2Points.push(2)
    this.chemicalAttr2Points.push(9.6)
    this.chemicalAttr2Points.push(1.65)
    this.chemicalAttr2Points.push(4.3)
    this.chemicalAttr2Points.push(4.3)

  }

  public getRadarChartAttrPoints(){

    this.radarChartAttrMinScaleValue = 0
    this.radarChartAttrMaxScaleValue = 80

    this.radarChartAttrPoints.push(31.91)
    this.radarChartAttrPoints.push(24.18)
    this.radarChartAttrPoints.push(5.03)
    this.radarChartAttrPoints.push(2.71)
    this.radarChartAttrPoints.push(65.76)
    this.radarChartAttrPoints.push(6.78)

    console.log(this.radarChartAttrPoints)
  }


  public ngOnInit(): void {

    // Promise.all([
      this.getChemicalAttr1s(),
      this.getPhysicalAttrs(),
      this.getChemicalAttr2s(),
      this.getRadarChartAttrPoints()
    // ])


  }

}
