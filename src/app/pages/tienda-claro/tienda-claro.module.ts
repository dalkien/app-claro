import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiendaClaroPageRoutingModule } from './tienda-claro-routing.module';

import { TiendaClaroPage } from './tienda-claro.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaClaroPageRoutingModule, 
    ComponentesModule
  ],
  declarations: [TiendaClaroPage]
})
export class TiendaClaroPageModule {}
