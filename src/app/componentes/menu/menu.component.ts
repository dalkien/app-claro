import { Component, OnInit } from '@angular/core';
import {AppComponent, pagina } from '../../app.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private homePage: AppComponent) { }
  paginas: pagina[] = this.homePage.paginas;

  ngOnInit() {}

}
