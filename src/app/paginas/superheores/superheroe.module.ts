import { ComponentesModule } from './../../compartido/componentes/componentes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SuperheroeRoutingModule } from './superheroe-routing.module';
import { SuperheroeListaComponent } from './superheroe-lista/superheroe-lista.component';
import { SuperheroeDetalleComponent } from './superheroe-detalle/superheroe-detalle.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperheroeRoutingModule,
    ComponentesModule,
    TranslateModule
  ],
  declarations: [
    SuperheroeListaComponent,
    SuperheroeDetalleComponent
  ]
})
export class SuperheroeModule {}
