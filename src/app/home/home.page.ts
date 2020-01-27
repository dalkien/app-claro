import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   paginas: pagina[]= [
    {
      icon:'home',
      name: 'Home', 
      redirectTo: '/home' 
    },
    {
      icon:'switch',
      name: 'Mi Claro', 
      redirectTo: '/mi-claro' 
    },
    {
      icon:'basket',
      name: 'Tienda Claro', 
      redirectTo: '/tienda-claro' 
    }
  ]
  getPaginas(){
    return this.paginas
  }
  constructor() {}

}  

export interface pagina {
  icon: string; 
  name: string; 
  redirectTo: string; 
}
