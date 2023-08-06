import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignadasListadoPage } from './asignadas-listado.page';

const routes: Routes = [
  {
    path: '',
    component: AsignadasListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignadasListadoPageRoutingModule {}
