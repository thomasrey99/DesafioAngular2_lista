import { Component } from '@angular/core';

@Component({
  selector: 'caracteristicas',
  template: `
    <div class="caracteristicas">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent {

}
