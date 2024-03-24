import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview-clients',
  templateUrl: './overview-clients.component.html',
  styleUrls: ['./overview-clients.component.css']
})
export class OverviewClientsComponent {

  @Input({required:true}) count:number | undefined

}
