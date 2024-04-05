import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../../servicios/sharedData.service';
import {  } from 'src/app/modelo/superheroe';
import { Superheroe } from '../../../modelo/superheroe';

/* muestra el detalle de un superheroe
 */
@Component({
  selector: 'app-superheroe-detalle',
  templateUrl: './superheroe-detalle.component.html',
  styleUrls: ['./superheroe-detalle.component.scss'],
})
export class SuperheroeDetalleComponent implements OnInit {

  superheroe?: Superheroe;

  constructor(
    private sharedDataService: SharedDataService,
  ) { }

  ngOnInit() {
    this.getSuperheroe();
  }

  getSuperheroe(){
    this.superheroe=this.sharedDataService.getData();
  }

}
