import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListatareasPageRoutingModule } from './listatareas-routing.module';

import { ListatareasPage } from './listatareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ListatareasPageRoutingModule
  ],
  declarations: [ListatareasPage]
})
export class ListatareasPageModule {}
