import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chemical-attr2',
  templateUrl: './chemical-attr2.component.html',
  styleUrls: ['./chemical-attr2.component.css']
})
export class ChemicalAttr2Component {

  @Input({required:true}) points!: number[]
  @Input({required:true}) scales!: number[][]
  @Input({required:true}) chartMaxPx!: number

}
