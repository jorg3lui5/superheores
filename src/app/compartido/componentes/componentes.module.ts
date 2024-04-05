import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ItemSuperheroeComponent } from './item-superheroe/item-superheroe.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    ItemSuperheroeComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    CabeceraComponent,
    RouterModule,
    ItemSuperheroeComponent,
  ],
})
export class ComponentesModule { }
