import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroeListaComponent } from './superheroe-lista/superheroe-lista.component';
import { SuperheroeDetalleComponent } from './superheroe-detalle/superheroe-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: SuperheroeListaComponent
  },
  {
    path: 'listar',
    component: SuperheroeListaComponent
  },
  {
    path: 'detalle',
    component: SuperheroeDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroeRoutingModule {}
