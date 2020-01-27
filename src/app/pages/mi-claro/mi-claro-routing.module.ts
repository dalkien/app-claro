import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiClaroPage } from './mi-claro.page';

const routes: Routes = [
  {
    path: '',
    component: MiClaroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiClaroPageRoutingModule {}
