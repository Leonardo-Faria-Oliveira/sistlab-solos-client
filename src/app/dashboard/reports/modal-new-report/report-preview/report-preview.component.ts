import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as d3 from 'd3';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Employee } from 'src/app/models/employee';
import { Report } from 'src/app/models/report';

@Component({
  selector: 'app-report-preview',
  templateUrl: './report-preview.component.html',
  styleUrls: ['./report-preview.component.css']
})
export class ReportPreviewComponent implements OnInit{

  @Input({required:true}) reportDate:string | undefined

  @Input({required:true}) report!:Report

  @Input({required:false}) scales:number[][] | undefined

  public clientName:string | undefined

  public city:string | undefined

  public depth:number | undefined

  public isPdf:boolean = false

  public isLoading:boolean = false


  public landName:string = " "//"this.report.landName"

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
    "46787652",
    "888888"
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

    this.chemicalAttr1Scales.push(this.scales![2])
    this.chemicalAttr1Scales.push(this.scales![9])
    this.chemicalAttr1Scales.push(this.scales![7])
    this.chemicalAttr1Scales.push(this.scales![8])

    this.chemicalAttr1Points.push(this.report.chemicalAnalysis!.ph)
    this.chemicalAttr1Points.push(this.report.ctc!)
    this.chemicalAttr1Points.push(this.report.acidity!)
    this.chemicalAttr1Points.push(this.report.bases!)

    console.log(this.chemicalAttr1Points)

  }

  public getPhysicalAttrs(){

    this.physicalAttrScales.push(this.scales![11])
    this.physicalAttrScales.push(this.scales![12])
    this.physicalAttrScales.push(this.scales![13])
    this.physicalAttrScales.push(this.scales![1])
    this.physicalAttrScales.push(this.scales![0])

    this.physicalAttrPoints.push(this.report.physicalAnalysis!.sand)
    this.physicalAttrPoints.push(this.report.physicalAnalysis!.silt)
    this.physicalAttrPoints.push(this.report.physicalAnalysis!.clay)
    this.physicalAttrPoints.push(this.report.physicalAnalysis!.organicMatter)
    this.physicalAttrPoints.push(this.report.physicalAnalysis!.totalOrganicCarbon)

  }

  public getChemicalAttr2s(){

    this.chemicalAttr2Scales.push(this.scales![3])
    this.chemicalAttr2Scales.push(this.scales![5])
    this.chemicalAttr2Scales.push(this.scales![6])
    this.chemicalAttr2Scales.push(this.scales![14])
    this.chemicalAttr2Scales.push(this.scales![4])
    this.chemicalAttr2Scales.push(this.scales![10])

    this.chemicalAttr2Points.push(this.report.chemicalAnalysis!.potassium)
    this.chemicalAttr2Points.push(this.report.chemicalAnalysis!.magnesium)
    this.chemicalAttr2Points.push(this.report.chemicalAnalysis!.aluminum)
    this.chemicalAttr2Points.push(this.report.chemicalAnalysis!.sodium)
    this.chemicalAttr2Points.push(this.report.chemicalAnalysis!.calcium)
    this.chemicalAttr2Points.push(this.report.chemicalAnalysis!.sulfur)

  }

  public getRadarChartAttrPoints(){

    this.radarChartAttrMinScaleValue = 0
    this.radarChartAttrMaxScaleValue = 100

    this.radarChartAttrPoints.push(this.report.saturation!.aluminumPercent)
    this.radarChartAttrPoints.push(this.report.saturation!.calciumPercent)
    this.radarChartAttrPoints.push(this.report.saturation!.potassiumPercent)
    this.radarChartAttrPoints.push(this.report.saturation!.magnesiumPercent)
    this.radarChartAttrPoints.push(this.report.saturation!.basesPercent)

    console.log(this.radarChartAttrPoints)
  }

  public generatePDF() {
    this.isPdf= true
    this.isLoading = true
    const data = document.getElementById('pdf');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 450;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdf = new jsPDF('p', 'px', 'a4');
        pdf.addImage(contentDataURL, 'PNG', -1, -1, imgWidth, imgHeight);
        pdf.save(this.landName + " - "+ this.clientName+".pdf");
      });
    }
    this.isLoading = false
  }


  public ngOnInit(): void {

      console.log(this.scales)
      this.landName = this.report.landName!
      this.city = this.report.city!
      this.depth = this.report.depth!
      this.clientName = this.report.client!.name

    // Promise.all([
      this.getChemicalAttr1s(),
      this.getPhysicalAttrs(),
      this.getChemicalAttr2s(),
      this.getRadarChartAttrPoints()
    // ])


  }

}
