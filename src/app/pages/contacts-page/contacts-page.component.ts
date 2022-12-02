import { Component, OnInit } from '@angular/core';
// Importamos la interface de IContacto
import { IContacto } from 'src/app/models/contact.intefaces';


@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  //Hacemos una lista de contactos de tipo IContacto
  listaContactos: IContacto[] = [
    {
      id: 0,
      nombre: 'Matias',
      apellidos: 'Lenci',
      email: 'matias@gmail.com',
    },
    {
      id: 1,
      nombre: 'Marcos',
      apellidos: 'Lenci',
      email: 'marcos@gmail.com',
    },
    {
      id: 2,
      nombre: 'Emiliano',
      apellidos: 'Lenci',
      email: 'emiliano@gmail.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
