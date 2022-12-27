import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Results} from '../models/randomuser';
import { Observable, catchError, retry, throwError } from 'rxjs';

//? Servicio para hacer peticiones GET
@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.status) {
      console.log(`Ha ocurrido un error: ${error.error}`);
    } else {
      console.log(
        `Error en el backend: ${error.status}. El error de la respuesta es: ${error.error}`
      );
    }
    return throwError(
      () => new Error('Error en la petición de contacto aleatorio')
    );
  }

  obtenerRandomContact(): Observable<any> {
    return this.http.get('https://randomuser.me/api').pipe(
      retry(2), //? numero de reintentos de peticiones
      catchError(this.handleError) //? sacamos error si algo falla
    );
  }

  //? Lista de contactos
  obtenerRandomContacts(n: number):Observable<Results[]> {
    // Guardamos en una const los pramatros que le pasaremos a nuestra petición http
    const opciones: HttpParams = new HttpParams().set('results', n);
    // Le pasamos los parametros
    return this.http
      .get<Results[]>('https://randomuser.me/api', { params: opciones })
      .pipe(
        retry(2), //? numero de reintentos de peticiones
        catchError(this.handleError) //? sacamos error si algo falla
      );
  }

  //? Lista de contactos filtrada
  obtenerRandomContactsPorGenero(sexo: string):Observable<Results> {
    const opciones: HttpParams = new HttpParams().set('gender', sexo);
    return this.http
      .get<Results>('https://randomuser.me/api', { params: opciones })
      .pipe(retry(2), catchError(this.handleError));
  }
}
