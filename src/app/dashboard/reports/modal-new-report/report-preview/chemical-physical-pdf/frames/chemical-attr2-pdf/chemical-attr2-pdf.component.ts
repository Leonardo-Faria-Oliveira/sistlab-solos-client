import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chemical-attr2-pdf',
  templateUrl: './chemical-attr2-pdf.component.html',
  styleUrls: ['./chemical-attr2-pdf.component.css']
})
export class ChemicalAttr2PdfComponent {
  @Input({required:true}) points!: number[]
  @Input({required:true}) scales!: number[][]
  @Input({required:true}) chartMaxPx!: number
}
