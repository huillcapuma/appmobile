import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembrosAddEditPage } from './miembros-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MiembrosAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembrosAddEditPageRoutingModule {}
