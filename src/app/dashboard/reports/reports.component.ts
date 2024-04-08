import { Component } from '@angular/core';
import { ErrorHandler } from 'src/app/interfaces/error-handler';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  public hasSuccess:boolean = false

  public hasError:boolean = false
  public error:ErrorHandler | null = null 

}
