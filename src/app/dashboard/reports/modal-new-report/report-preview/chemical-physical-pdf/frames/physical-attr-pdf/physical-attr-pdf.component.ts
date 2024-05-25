import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-physical-attr-pdf',
  templateUrl: './physical-attr-pdf.component.html',
  styleUrls: ['./physical-attr-pdf.component.css']
})
export class PhysicalAttrPdfComponent {
  @Input({required:true}) points!: number[]
  @Input({required:true}) scales!: number[][]
  @Input({required:true}) chartMaxPx!: number

}
