import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-chemical-physical-preview',
  templateUrl: './chemical-physical-preview.component.html',
  styleUrls: ['./chemical-physical-preview.component.css']
})
export class ChemicalPhysicalPreviewComponent {
  
  @Input({required:true}) clientName!:string

  @Input({required:true}) city!:string

  @Input({required:true}) depth!:number

  @Input({required:true}) landName!:string

  @Input({required:true}) reportDate!:string

  @Input({required:true}) chartMaxPx!:number

  @Input({required:false}) chemicalAttr1Points!:number[]
  
  @Input({required:false}) physicalAttrPoints!:number[]

  @Input({required:false}) chemicalAttr2Points!:number[]

  @Input({required:false}) radarChartAttrPoints!:number[]

  @Input({required:false}) chemicalAttr1Scales!:number[][]

  @Input({required:false}) physicalAttrScales!:number[][]

  @Input({required:false}) chemicalAttr2Scales!:number[][]

  @Input({required:false}) technicalResponsible!:Employee

}
