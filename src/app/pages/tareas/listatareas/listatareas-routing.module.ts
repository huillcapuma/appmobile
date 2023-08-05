import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListatareasPage } from './listatareas.page';

const routes: Routes = [
  {
    path: '',
    component: ListatareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListatareasPageRoutingModule {}
