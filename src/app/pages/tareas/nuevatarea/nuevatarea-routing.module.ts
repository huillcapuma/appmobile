import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevatareaPage } from './nuevatarea.page';

const routes: Routes = [
  {
    path: '',
    component: NuevatareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevatareaPageRoutingModule {}
