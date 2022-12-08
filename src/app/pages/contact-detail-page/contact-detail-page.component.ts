import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Nos va a decir el contenido que hay en la url
import { IContacto } from 'src/app/models/contact.intefaces';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {
  // *Este id es el vamos a capturar(podria ser el contacto completo o cualquier cosa)
  id: any | undefined;

  contacto: IContacto = {
    id: 0,
    nombre: '',
    email: '',
    sexo: '',
    apellidos: '',
  };

  filtroPrevio: string = 'todos';

  // *Inyectamos la dependencia
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // *Vamos a leer los parametros (podemos hacerlo con params o snapshot)
    // *Con params nos suscribiriamos
    // ?De esta forma obtenemos el parametro que tiene la url para utilizarlo en el componente
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });

    //? Vamos a leer del state tambien los contactos
    if (history.state.data) {
      this.contacto = history.state.data;
    }

    //? Guardamos el filtro anterior asi si regresamos se mantiene la lista de contactos que filtramos
    if (history.state.data) {
      this.filtroPrevio = history.state.filtro;
    }

    //* Acceder a parametos de una ruta superior
    //* Podemos obtener los parametros del padre(en este caso del padre) e iterar sobre ellos, suscribirnos al mismo, etc.
    //* this.route.parent?.params
    //* Tambien podemos obtener parametros no solo del padre, tambien de los hijos, del componente, etc
  }
}
