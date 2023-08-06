import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignadasAddEditPageRoutingModule } from './asignadas-add-edit-routing.module';

import { AsignadasAddEditPage } from './asignadas-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AsignadasAddEditPageRoutingModule
  ],
  declarations: [AsignadasAddEditPage]
})
export class AsignadasAddEditPageModule {}
