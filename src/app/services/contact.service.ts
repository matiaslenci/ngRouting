import { Injectable } from '@angular/core';
import { LISTA_CONTACTOS } from '../mocks/contacts.mock';
import { IContacto } from '../models/contact.intefaces';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  //Creamos una lista de contactos y la inicializamos con los valores de la LISTACONTACTOS
  listaContactos: IContacto[] = LISTA_CONTACTOS;

  constructor() {}
  /**
   * ?Creamos un filtro? obsional por sexo que dependiendo del sexo que seleccione filtra en la lista de contactos
   */
  obtenerContactos(sexo?: string): Promise<IContacto[]> {
    if (  sexo == 'hombre' || sexo == 'mujer') {
      // ?Creamos una nueva variable con la lista de contactos filtrada, la filtramos con el metodo filter que itera en la array de contactos comparando cada uno con el sexo que pasamos por parametro
      let listaFiltrada = this.listaContactos.filter(
        (contacto) => contacto.sexo == sexo
      );
      // *Si la promesa se resuelve devuelve la lista filtrada
      return Promise.resolve(listaFiltrada);
    } else if (sexo == 'todos') {
      //? El parametro 'todos' lo traemos con queryParams desde contact-page.component.ts
      //* Si no lo filtramos devuelve la lista completa
      return Promise.resolve(this.listaContactos);
    } else {
      return Promise.reject(console.error(`filtro no valido`));
    }
  }
}
