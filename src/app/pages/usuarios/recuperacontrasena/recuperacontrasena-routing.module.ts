import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacontrasenaPage } from './recuperacontrasena.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacontrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacontrasenaPageRoutingModule {}
