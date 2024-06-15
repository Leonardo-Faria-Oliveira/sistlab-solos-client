import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorHandler } from 'src/app/interfaces/error-handler';
import { PhysicalAnalysisEmitter } from 'src/app/interfaces/physical-analysis-emitter';
import { PhosphorValue } from 'src/app/models/phosphorValue';

@Component({
  selector: 'app-physical-analysis',
  templateUrl: './physical-analysis.component.html',
  styleUrls: ['./physical-analysis.component.css']
})
export class PhysicalAnalysisComponent{

  @Input({required:false}) lastPhosphorValue:PhosphorValue | undefined
  @Output() nextEmitter = new EventEmitter<void>();
  @Output() formEmitter = new EventEmitter<PhysicalAnalysisEmitter>();
  @Output() errorEmitter = new EventEmitter<ErrorHandler>();
  
  public physicalAnalysisForm = new FormGroup({
    phosphorAbsorbance: new FormControl<string | undefined>(undefined),
    sulfur: new FormControl<string | undefined>(undefined),
    carbon: new FormControl<string | undefined>(undefined),
    sand: new FormControl<string | undefined>(undefined),
    silt: new FormControl<string | undefined>(undefined),
    clay: new FormControl<string | undefined>(undefined),
    // organicMatter: new FormControl<string | undefined>(undefined),
  })

  public next(){

    if(
     !(this.physicalAnalysisForm.value.phosphorAbsorbance === undefined ||
      this.physicalAnalysisForm.value.phosphorAbsorbance === null ||
      parseFloat(this.physicalAnalysisForm.value.phosphorAbsorbance) < 0)
    ||
    !(this.physicalAnalysisForm.value.carbon === undefined ||
      this.physicalAnalysisForm.value.carbon === null ||
      parseFloat(this.physicalAnalysisForm.value.carbon) < 0)
    ||
    !(this.physicalAnalysisForm.value.sand === undefined ||
      this.physicalAnalysisForm.value.sand === null ||
      parseFloat(this.physicalAnalysisForm.value.sand) < 0)
    ||
    !(this.physicalAnalysisForm.value.silt === undefined ||
      this.physicalAnalysisForm.value.silt === null ||
      parseFloat(this.physicalAnalysisForm.value.silt) < 0)
    ||
    !(this.physicalAnalysisForm.value.clay === undefined ||
      this.physicalAnalysisForm.value.clay === null ||
      parseFloat(this.physicalAnalysisForm.value.clay) < 0)
    //   ||
    // !(this.physicalAnalysisForm.value.organicMatter === undefined ||
    //   this.physicalAnalysisForm.value.organicMatter === null ||
    //   parseFloat(this.physicalAnalysisForm.value.organicMatter) < 0)
      ){

        const phosphorAbsorbance = parseFloat(this.physicalAnalysisForm.value.phosphorAbsorbance!)
        const carbon = parseFloat(this.physicalAnalysisForm.value.carbon!)

        const phosphor = this.getPhosphor(phosphorAbsorbance)
        const totalOrganicCarbon = this.getTotalOrganicCarbon(carbon)
        const organicMatter = this.getOrganicMatter(totalOrganicCarbon)
        this.formEmitter.emit({
          phosphorAbsorbance: phosphorAbsorbance,
          phosphor: phosphor,
          physicalAnalysis:{
          carbon: carbon,
          clay: parseFloat(this.physicalAnalysisForm.value.clay!),
          organicMatter: organicMatter,
          sand: parseFloat(this.physicalAnalysisForm.value.sand!),
          silt: parseFloat(this.physicalAnalysisForm.value.silt!),
          totalOrganicCarbon: totalOrganicCarbon
          }
        })

        this.nextEmitter.emit()

      }else{
        this.errorEmitter.emit({
          errorCode: 400,
          errorMessage: "Preencha todos os campos" 
        })
      }
  }

  public getTotalOrganicCarbon(carbon:number):number {
    return ((5 - carbon) * 0.779) * 10
  }
  
  public getPhosphor(phosphorAbsorbance:number):number {
    return (2 - Math.log(phosphorAbsorbance)) * this.lastPhosphorValue?.absorbanceValue!
  }

  public getOrganicMatter(totalOrganicCarbon:number):number{
    return totalOrganicCarbon * 1.724
  }
  


}
