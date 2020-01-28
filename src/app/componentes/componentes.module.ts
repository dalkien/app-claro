import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecerasComponent } from './cabeceras/cabeceras.component'
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { SlidesComponent } from './slides/slides.component';



@NgModule({
  declarations: [CabecerasComponent,
    MenuComponent, SlidesComponent],
  exports:[
    CabecerasComponent,
    MenuComponent, 
    SlidesComponent
  ],
  imports: [
    CommonModule, 
    IonicModule
  ]
})
export class ComponentesModule { }
