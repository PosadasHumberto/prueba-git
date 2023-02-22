import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //atributos
  titulo = 'Aplicacion de alculadora';
  a : number = 0;
  b : number = 0;
  resultado : number = 0;

  //métodos
  sumar(datos : number[]){  /*recibe un arreglo de 2 posiciones con los valores a sumar*/
    this.resultado = datos[0] + datos[1];
  }

}
