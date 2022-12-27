import { Component, OnInit } from '@angular/core';
// *Importamos Router para inyectarlo en la función
import { NavigationExtras, Router } from '@angular/router';
import { IRandomContact } from 'src/app/models/randomuser';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss'],
})
export class HomePagesComponent implements OnInit {
  // ?Guardamos la información del contacto en una variable
  contactoSeleccionado: IRandomContact | undefined = history.state.data;

  token: string | null = null;
  pretty: any;

  constructor(private router: Router /* Inyectamos Router */) {}

  ngOnInit(): void {
    // *Comprobar si el token existe en la sessionStorage
    this.token = sessionStorage.getItem('token');

    // ?Leemos el estado del historial de navegación cuando se inicie el componente, si existe lo recupera
    if (history.state.data) {
      this.contactoSeleccionado = history.state.data;
      console.log(this.contactoSeleccionado);
    }
  }

  /**
   ** Creamos un evento para navegar a la pag de Contactos
   */
  navegarAContactos(): void {
    // ?Pasar informacion con queryParams
    let navigationExtras: NavigationExtras = {
      queryParams: {
        //? Filtra los contactos que sean mujeres
       
      },
    };

    this.router.navigate(['contacts'], navigationExtras);
  }
}
