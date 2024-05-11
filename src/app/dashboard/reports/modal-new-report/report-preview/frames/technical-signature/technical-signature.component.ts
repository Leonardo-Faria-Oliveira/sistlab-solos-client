import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technical-signature',
  templateUrl: './technical-signature.component.html',
  styleUrls: ['./technical-signature.component.css']
})
export class TechnicalSignatureComponent {

  @Input({required:true}) technicalName!: string
  @Input({required:true}) crea!: string



}
