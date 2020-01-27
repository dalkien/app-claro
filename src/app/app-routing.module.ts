import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'mi-claro',
    loadChildren: () => import('./pages/mi-claro/mi-claro.module').then( m => m.MiClaroPageModule)
  },
  {
    path: 'tienda-claro',
    loadChildren: () => import('./pages/tienda-claro/tienda-claro.module').then( m => m.TiendaClaroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
