import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from 'src/app/components/modals/error-modal.component';
import { Employee } from 'src/app/models/employee';
import { ChemicalAttr1PdfComponent } from './frames/chemical-attr-1/chemical-attr1-pdf.component';
import { ChemicalAttr2PdfComponent } from './frames/chemical-attr-2/chemical-attr2-pdf.component';
import { PhysicalAttrPdfComponent } from './frames/physical-attr/physical-attr-pdf.component';
import { RadarChartFramePdfComponent } from './frames/radar-chart/radar-chart-frame-pdf.component';
import { TechnicalSignaturePdfComponent } from './frames/signature/technical-signature-pdf.component';

@Component({
  selector: 'app-chemical-physical-pdf',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    ChemicalAttr1PdfComponent,
    ChemicalAttr2PdfComponent,
    PhysicalAttrPdfComponent,
    RadarChartFramePdfComponent,
    TechnicalSignaturePdfComponent
  ],
  templateUrl: '../../../../../pages/components/modals/report/modal-new-report/report-preview/pdf/chemical-physical-pdf.component.html',
  styleUrls: ['../../../../../pages/components/modals/report/modal-new-report/report-preview/pdf/chemical-physical-pdf.component.css']
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
