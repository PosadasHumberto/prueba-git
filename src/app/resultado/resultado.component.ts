import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  //atributos
  @Input()
  result : number;  /*valor recibido del padre*/

}
