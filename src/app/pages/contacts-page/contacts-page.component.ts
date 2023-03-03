import { Component, OnInit } from '@angular/core';
// importamos Router
import { ActivatedRoute } from '@angular/router'; // Nos va a decir el contenido que hay en la url
import { Router } from '@angular/router';
// Importamos la interface de IContacto
import { IContacto } from 'src/app/models/contact.intefaces';
// importamos navigationExtras
import { NavigationExtras } from '@angular/router';
import { RandomUserService } from 'src/app/services/random-user.service';
import { IRandomContact, Results } from 'src/app/models/randomuser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  //? Variable para saber si el contenido esta cargando
  cargando: boolean = true;
  //? Variable para filtro por sexo
  filtroSexo: string = 'todos';
  listaRandomContact: IRandomContact[] = [];

  // *inyectamos router
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private randomUserService: RandomUserService
  ) {}

  ngOnInit(): void {
    // *Obtenemos los queryParams, los filtramos y los pasamos por consola
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParams: ', params.sexo);
      if (params.sexo) {
        this.filtroSexo = params.sexo;
        if (params.sexo == 'female' || params.sexo == 'male') {
          //? Entonces filtramos por sexo
          this.randomUserService
            .obtenerRandomContacts(10, params.sexo)
            .subscribe({
              next: (response: Results) => {
                response.results.forEach((randomContact: IRandomContact) => {
                  this.listaRandomContact.push(randomContact);
                });
                console.log(this.listaRandomContact);
              },
              error: (error: any) => console.error(`${error}`),
              complete: () => {
                console.info('Petición de random contact completada');
                this.cargando = false;
              },
            });
        } else {
          //? Implementacion para obtener la lista de contactos aleatoria
          this.randomUserService.obtenerRandomContacts(10).subscribe({
            next: (response: Results) => {
              response.results.forEach((randomContact: IRandomContact) => {
                this.listaRandomContact.push(randomContact);
              });
              console.log(this.listaRandomContact);
            },
            error: (error: any) => console.error(`${error}`),
            complete: () => {
              console.info('Petición de random contact completada');
              this.cargando = false;
            },
          });
        }
      }
    });
  }
  /**
   * ?Ejemplo de paso de información entre componentes utilizando ESTADO
   * * Nos regresa al Home pero con los datos del contacto que seleccionamos
   */
  volverAHome(contacto: IRandomContact): void {
    //* NavigationExtras
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto,
      },
    };

    // *sistema de enrutado
    this.router.navigate(['/dashboard/home'], navigationExtras);
  }
}
