import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-chemical-physical-pdf',
  templateUrl: './chemical-physical-pdf.component.html',
  styleUrls: ['./chemical-physical-pdf.component.css']
})
export class ChemicalPhysicalPdfComponent implements OnInit {


  
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


  ngOnInit(): void {
    console.log(this.technicalResponsible)
  }

}
