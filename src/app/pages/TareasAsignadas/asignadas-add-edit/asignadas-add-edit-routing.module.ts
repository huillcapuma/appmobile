import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignadasAddEditPage } from './asignadas-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AsignadasAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignadasAddEditPageRoutingModule {}
