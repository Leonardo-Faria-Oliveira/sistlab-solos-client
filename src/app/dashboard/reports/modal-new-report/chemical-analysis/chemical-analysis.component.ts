import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChemicalAnalysisEmitter } from 'src/app/interfaces/chemical-analysis-emitter';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { Access } from 'src/app/models/access';
import { ChemicalAnalysis } from 'src/app/models/chemicalAnalysis';
import { Employee } from 'src/app/models/employee';
import { PhosphorValue } from 'src/app/models/phosphorValue';

@Component({
  selector: 'app-chemical-analysis',
  templateUrl: './chemical-analysis.component.html',
  styleUrls: ['./chemical-analysis.component.css']
})
export class ChemicalAnalysisComponent {


  @Input({required:true}) hasMicronutrients:boolean = false

  @Output() nextEmitter = new EventEmitter<void>();
  @Output() doubleNextEmitter = new EventEmitter<void>();
  @Output() formEmitter = new EventEmitter<ChemicalAnalysisEmitter>();
  @Output() errorEmitter = new EventEmitter<ErrorHandler>();


  public chemicalAnalysisForm = new FormGroup({
    ph: new FormControl<string | undefined>(undefined),
    sulfur: new FormControl<string | undefined>(undefined),
    potencialAcidity: new FormControl<string | undefined>(undefined),
    potassium: new FormControl<string | undefined>(undefined),
    magnesium: new FormControl<string | undefined>(undefined),
    aluminum: new FormControl<string | undefined>(undefined),
    sodium: new FormControl<string | undefined>(undefined),
    calcium: new FormControl<string | undefined>(undefined)
  })

  public next(){

    this.nextEmitter.emit()

  }

  public doubleNext(){

    if(
      !(this.chemicalAnalysisForm.value.ph === undefined ||
       this.chemicalAnalysisForm.value.ph === null ||
       parseFloat(this.chemicalAnalysisForm.value.ph) < 0)
     ||
      !(this.chemicalAnalysisForm.value.sulfur === undefined ||
       this.chemicalAnalysisForm.value.sulfur === null ||
       parseFloat(this.chemicalAnalysisForm.value.sulfur) < 0)
     ||
     !(this.chemicalAnalysisForm.value.potencialAcidity === undefined ||
       this.chemicalAnalysisForm.value.potencialAcidity === null ||
       parseFloat(this.chemicalAnalysisForm.value.potencialAcidity) < 0)
     ||
     !(this.chemicalAnalysisForm.value.potassium === undefined ||
       this.chemicalAnalysisForm.value.potassium === null ||
       parseFloat(this.chemicalAnalysisForm.value.potassium) < 0)
     ||
     !(this.chemicalAnalysisForm.value.magnesium === undefined ||
       this.chemicalAnalysisForm.value.magnesium === null ||
       parseFloat(this.chemicalAnalysisForm.value.magnesium) < 0)
     ||
     !(this.chemicalAnalysisForm.value.aluminum === undefined ||
       this.chemicalAnalysisForm.value.aluminum === null ||
       parseFloat(this.chemicalAnalysisForm.value.aluminum) < 0)
     ||
     !(this.chemicalAnalysisForm.value.sodium === undefined ||
       this.chemicalAnalysisForm.value.sodium === null ||
       parseFloat(this.chemicalAnalysisForm.value.sodium) < 0)
     ||
     !(this.chemicalAnalysisForm.value.calcium === undefined ||
      this.chemicalAnalysisForm.value.calcium === null ||
      parseFloat(this.chemicalAnalysisForm.value.calcium) < 0)
       )
      {

        const calcium = parseFloat(this.chemicalAnalysisForm.value.calcium!)
        const magnesium = parseFloat(this.chemicalAnalysisForm.value.magnesium!)
        const potassium = parseFloat(this.chemicalAnalysisForm.value.potassium!)
        const aluminum = parseFloat(this.chemicalAnalysisForm.value.aluminum!)
        const potencialAcidity = parseFloat(this.chemicalAnalysisForm.value.potencialAcidity!)
        const acidity = this.getAcidity(potencialAcidity)
        const bases = potassium + calcium + magnesium
        const ctc =acidity + bases

        this.formEmitter.emit({
          chemicalAnalysis:{
            ph: parseFloat(this.chemicalAnalysisForm.value.ph!),
            sulfur: parseFloat(this.chemicalAnalysisForm.value.sulfur!),
            potencialAcidity: potencialAcidity,
            potassium: potassium,
            magnesium: magnesium,
            aluminum: aluminum,
            sodium: parseFloat(this.chemicalAnalysisForm.value.sodium!),
            calcium: calcium,
          },
          bases: bases,
          acidity: acidity,
          ctc: ctc,
          saturation:{
            aluminumPercent:(100*aluminum)/(potassium+calcium+magnesium+aluminum),
            basesPercent:(100*bases)/ctc,
            calciumPercent:(100*calcium)/ctc,
            magnesiumPercent:(100*magnesium)/ctc,
            potassiumPercent:(100*potassium)/ctc
          }

        })

        this.doubleNextEmitter.emit()

      }else{
        this.errorEmitter.emit({
          errorCode: 400,
          errorMessage: "Preencha todos os campos" 
        })
      }
    
  }


  public getAcidity(potencialAcidity:number){

    return Math.pow(2.566, (7.76-(1.053*potencialAcidity)))

  }


}
