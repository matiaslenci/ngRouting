import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomuser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss'],
})
export class RandomContactPageComponent implements OnInit {
  contact: IRandomContact | undefined;
  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    //* Usuario aleatorio cuando se carga la pagina
    this.subscripcionRandomContact();
  }

  /**
   *? Nos subscribimos a la petición http y nos devuelve un usuario aletario
   */
  subscripcionRandomContact() {
    this.randomUserService.obtenerRandomContact().subscribe({
      //* Peticion
      next: (response: Results) => {
        //* retorna el primer resultado ( result[0])
        this.contact = response.results[0]; //* Se lo pasaremos al randomContact
      },
      //* Gestion de errores
      error: (error) => console.error(`${error}`),
      //* Fin de peticion
      complete: () => console.info('Petición de random contact completada'),
    });
  }

  //* Usuario alaterio cuando clieckeamos el boton
  obtenerNuevoContacto() {
    this.subscripcionRandomContact();
  }

  obtenerListaDeContactos(n: number) {
    this.randomUserService.obtenerRandomContacts(n).subscribe({
      next: (response: Results[]) => {
        console.log(response);
      },
      error: (error) => console.error(`${error}`),
      complete: () => console.info('Petición de random contact completada'),
    });
  }
}

/* Metodo para subcribirse deprecate
this.randomUserService.obtenerRandomContact().subscribe(
  (response: Results) => {
    // retorna el primer resultado ( result[0])
    this.contact = response.results[0]; // Se lo pasaremos al randomContact
  },
  (error) => console.error(`${error}`)
  );
   */
