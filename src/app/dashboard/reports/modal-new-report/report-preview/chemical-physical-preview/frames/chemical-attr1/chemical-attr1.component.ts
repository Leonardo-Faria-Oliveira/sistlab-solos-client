import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chemical-attr1',
  templateUrl: './chemical-attr1.component.html',
  styleUrls: ['./chemical-attr1.component.css']
})
export class ChemicalAttr1Component {

  @Input({required:true}) points!: number[]
  @Input({required:true}) scales!: number[][]
  @Input({required:true}) chartMaxPx!: number

}
