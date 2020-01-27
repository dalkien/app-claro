import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiClaroPageRoutingModule } from './mi-claro-routing.module';

import { MiClaroPage } from './mi-claro.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiClaroPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MiClaroPage]
})
export class MiClaroPageModule {}
