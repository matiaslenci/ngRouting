import { Component, OnInit } from '@angular/core';
// importamos Router
import { ActivatedRoute, Router } from '@angular/router';
// Importamos la interface de IContacto
import { IContacto } from 'src/app/models/contact.intefaces';
// importamos navigationExtras
import { NavigationExtras } from '@angular/router';
//importamos servicio del contactos
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  //Hacemos una lista de contactos de tipo IContacto
  //! Exportada a un servicio
/*     listaContactos: IContacto[] = [
    {
      id: 0,
      nombre: 'Matias',
      apellidos: 'Lenci',
      email: 'matias@gmail.com',
      sexo: 'hombre',
    },
    {
      id: 1,
      nombre: 'Daiana',
      apellidos: 'Paret',
      email: 'dai@gmail.com',
      sexo: 'mujer',
    },
    {
      id: 2,
      nombre: 'Emiliano',
      apellidos: 'Lenci',
      email: 'emiliano@gmail.com',
      sexo: 'hombre',
    },
  ];  */

  //? Variable para filtro por sexo
  filtroSexo: string = 'todos';
  listaContactos: IContacto[] = [];

  // *inyectamos router
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    // *Obtenemos los queryParams, los filtramos y los pasamos por consola
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParams: ', params.sexo);
      if (params.sexo) {
        this.filtroSexo = params.sexo;
      }
      // ?Obtenemos la lista de contactos
      this.contactService
        .obtenerContactos(this.filtroSexo)
        .then((lista) => this.listaContactos = lista)
        .catch((err) =>
          console.error(
            'Ha ocurrido un error en obtener la lista de contactos: ' + err
          )
        )
        .finally(() => console.info('Peticion de contactos terminada'));
    });
  }
  /**
   * ?Ejemplo de paso de información entre componentes utilizando ESTADO
   * * Nos regresa al Home pero con los datos del contacto que seleccionamos 
   */
  volverAHome(contacto: IContacto): void {
    //* NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto,
      },
    };

    // *sistema de enrutado
    this.router.navigate(['/home'], navigationExtras);
  }
}
