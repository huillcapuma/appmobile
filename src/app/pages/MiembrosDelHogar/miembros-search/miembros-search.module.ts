import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiembrosSearchPageRoutingModule } from './miembros-search-routing.module';

import { MiembrosSearchPage } from './miembros-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiembrosSearchPageRoutingModule
  ],
  declarations: [MiembrosSearchPage]
})
export class MiembrosSearchPageModule {}
