import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  templateUrl: '../../pages/components/modals/error-modal/error-modal.component.html',
  styleUrls: ['../../pages/components/modals/error-modal/error-modal.component.css'] 
})
export class ErrorModalComponent {

  @Input({required:true}) errorMessage!: string

}
