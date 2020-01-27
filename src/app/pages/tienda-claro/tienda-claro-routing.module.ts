import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaClaroPage } from './tienda-claro.page';

const routes: Routes = [
  {
    path: '',
    component: TiendaClaroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendaClaroPageRoutingModule {}
