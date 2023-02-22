import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //atributos
  @Output()   /*atributo que va a permitirnos emitir al padre los valores recuperados en los inputs*/
  obtencionDatos = new EventEmitter<number[]>();

  a : number;
  b : number;

  //métodos
  obtener(){/*emite al padre un arreglo con los dos balores que se van a sumar*/
    let datos : number[] = [this.a, this.b];
    this.obtencionDatos.emit(datos);
  }

}
