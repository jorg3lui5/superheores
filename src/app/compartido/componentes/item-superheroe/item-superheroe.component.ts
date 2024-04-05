import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Superheroe } from '../../../modelo/superheroe';
import { SharedDataService } from '../../../servicios/sharedData.service';

/* visualiza los datos de un superheroe
 */

@Component({
  selector: 'app-item-superheroe',
  templateUrl: './item-superheroe.component.html',
  styleUrls: ['./item-superheroe.component.scss'],
})
export class ItemSuperheroeComponent implements OnInit {
  @Input() superheroe?: Superheroe;

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService,
  ) { }

  ngOnInit() {
  }

  ver(){
    this.sharedDataService.setData(this.superheroe);
    this.router.navigate(['/superhores/detalle']);

  }

}
