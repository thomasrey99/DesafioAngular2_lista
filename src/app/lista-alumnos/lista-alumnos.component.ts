import { Component } from '@angular/core';
import { cursantes } from 'src/environments/variablesGlobales';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos: Array <{nombre:string, apellido:string, aprobo:boolean}>=cursantes;
  fechaDeExamen=new Date();
  title="Listado de alumnos";
}
