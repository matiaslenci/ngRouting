import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngRouting';

  constructor() {}
  ngOnInit(): void {}
}

//? Paso de información entre componentes
//* 1.A travez de Inputs y Outputs
//* 2.A travez de inyecciones de constructores de componentes hijos
//* 3.A travez de servicios (observables, promesas, etc) --> NGX (Gestión del estado de la aplicación)
//* 4.A travez de parametros entre rutas
