import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chemical-attr1-pdf',
  templateUrl: './chemical-attr1-pdf.component.html',
  styleUrls: ['./chemical-attr1-pdf.component.css']
})
export class ChemicalAttr1PdfComponent {


  @Input({required:true}) points!: number[]
  @Input({required:true}) scales!: number[][]
  @Input({required:true}) chartMaxPx!: number

}
