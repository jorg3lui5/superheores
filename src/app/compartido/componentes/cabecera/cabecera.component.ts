import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

/*   visualiza el toolbar en cada una de las pantallas de la aplicación.
    El toolbar muestra el título de la pantalla actual y el botón que regresa a la pantalla anterior.
 */
  @Input() titulo?: string = '';
  @Input() ocultarRegresar: boolean = false;

  constructor() { }

  ngOnInit() {}

}
