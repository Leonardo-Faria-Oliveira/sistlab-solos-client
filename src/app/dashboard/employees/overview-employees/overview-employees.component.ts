import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview-employees',
  templateUrl: './overview-employees.component.html',
  styleUrls: ['./overview-employees.component.css']
})
export class OverviewEmployeesComponent {

  @Input({required:true}) countOk:number | undefined

  @Input({required:true}) countOff:number | undefined

}
