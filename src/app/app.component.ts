import { Component } from '@angular/core';
import { cursantes } from 'src/environments/variablesGlobales';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos: Array <{nombre:string, apellido:string, aprobo:boolean}>=cursantes
}
