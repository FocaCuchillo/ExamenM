import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionRestablecerPageRoutingModule } from './confirmacion-restablecer-routing.module';

import { ConfirmacionRestablecerPage } from './confirmacion-restablecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionRestablecerPageRoutingModule
  ],
  declarations: [ConfirmacionRestablecerPage]
})
export class ConfirmacionRestablecerPageModule {}
