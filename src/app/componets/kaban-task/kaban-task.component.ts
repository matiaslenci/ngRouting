import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kaban-task',
  templateUrl: './kaban-task.component.html',
  styleUrls: ['./kaban-task.component.scss'],
})
export class KabanTaskComponent {
  todo = [
    'Aprender animaciones en Angular',
    'Aprender a gestionar Angular CLI',
    'Aprender a hacer una build en Angular',
    'Aprender a desplegar un bundle en Angular',
  ];

  done = [
    'Aprender JS y ES6',
    'Aprender TS',
    'Instalar Angular',
    'Configurar IDE',
    'Crear un "Hola mundo" en Angular',
    'Aprender a gestionar componentes en Angular',
    'Aprender a gestionar servicios',
    'Aprender a gestionar directivas',
    'Aprender a gestionar pipes',
    'Aprender a gestionar peticiones HTTP',
    'Aprender a gestionar Angular Materal',
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
