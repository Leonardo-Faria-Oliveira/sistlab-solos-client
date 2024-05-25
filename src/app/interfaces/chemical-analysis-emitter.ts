import { ChemicalAnalysis } from "../models/chemicalAnalysis"
import { PhysicalAnalysis } from "../models/physicalAnalysis"
import { Saturation } from "../models/saturation"

export interface ChemicalAnalysisEmitter{

   chemicalAnalysis: ChemicalAnalysis,
   ctc:number
   bases:number
   acidity:number
   saturation: Saturation

}