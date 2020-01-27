import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecerasComponent } from './cabeceras/cabeceras.component'
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [CabecerasComponent,
    MenuComponent],
  exports:[
    CabecerasComponent,
    MenuComponent
  ],
  imports: [
    CommonModule, 
    IonicModule
  ]
})
export class ComponentesModule { }
