import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'superhores',
    loadChildren: () => import('./paginas/superheores/superheroe.module').then( m => m.SuperheroeModule),
  },
  {
    path: '',
    redirectTo: 'superhores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
