import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiembrosSearchPage } from './miembros-search.page';

const routes: Routes = [
  {
    path: '',
    component: MiembrosSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiembrosSearchPageRoutingModule {}
