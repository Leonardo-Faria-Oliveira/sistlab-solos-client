import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technical-signature-pdf',
  templateUrl: './technical-signature-pdf.component.html',
  styleUrls: ['./technical-signature-pdf.component.css']
})
export class TechnicalSignaturePdfComponent {
  @Input({required:true}) technicalName!: string
  @Input({required:true}) crea!: string
}
