import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chemical-analysis',
  templateUrl: './chemical-analysis.component.html',
  styleUrls: ['./chemical-analysis.component.css']
})
export class ChemicalAnalysisComponent {

  @Input({required:true}) hasMicronutrients:boolean = false
  @Output() nextEmitter = new EventEmitter<void>();
  @Output() doubleNextEmitter = new EventEmitter<void>();

  public chemicalAnalysisForm = new FormGroup({
    email: new FormControl<string | undefined>(undefined),
    job: new FormControl<string | undefined>(undefined),
    contact: new FormControl<string | undefined>(undefined),
    name: new FormControl<string | undefined>(undefined),
    crea: new FormControl<string | null | undefined>(undefined)
  })

  public next(){
    this.nextEmitter.emit()
  }

  public doubleNext(){
    this.doubleNextEmitter.emit()
  }

}
