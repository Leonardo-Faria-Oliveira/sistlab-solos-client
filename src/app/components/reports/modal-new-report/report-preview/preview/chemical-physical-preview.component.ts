import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModalComponent } from 'src/app/components/modals/error-modal.component';
import { Employee } from 'src/app/models/employee';
import { ChemicalAttr1Component } from './frames/chemical-attr-1/chemical-attr1.component';
import { ChemicalAttr2Component } from './frames/chemical-attr-2/chemical-attr2.component';
import { PhysicalAttrComponent } from './frames/physical-attr/physical-attr.component';
import { TechnicalSignatureComponent } from './frames/signature/technical-signature.component';
import { RadarChartFrameComponent } from './frames/radar-chart/radar-chart-frame.component';

@Component({
  selector: 'app-chemical-physical-preview',
  standalone:true,
  imports:[
    CommonModule,
    ErrorModalComponent,
    ReactiveFormsModule,
    ChemicalAttr1Component,
    ChemicalAttr2Component,
    PhysicalAttrComponent,
    RadarChartFrameComponent,
    TechnicalSignatureComponent
  ],
  templateUrl: '../../../../../pages/components/modals/report/modal-new-report/report-preview/preview/chemical-physical-preview.component.html',
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
