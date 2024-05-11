import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-physical-attr',
  templateUrl: './physical-attr.component.html',
  styleUrls: ['./physical-attr.component.css']
})
export class PhysicalAttrComponent {

  @Input({required:true}) points!: number[]
  @Input({required:true}) scales!: number[][]
  @Input({required:true}) chartMaxPx!: number


}
