import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembrosListadoPage } from './miembros-listado.page';

const routes: Routes = [
  {
    path: '',
    component: MiembrosListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembrosListadoPageRoutingModule {}
