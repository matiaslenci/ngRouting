import { Component, OnInit } from '@angular/core';
// *Importamos Router para inyectarlo en la función
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss'],
})
export class HomePagesComponent implements OnInit {
  constructor(private router: Router/* Inyectamos Router */) {}

  ngOnInit(): void {}

  /**
   ** Creamos un evento para navegar a la pag de Contactos
   */
  navegarAContactos(): void {
    this.router.navigate(['contacts']);
  }
}
