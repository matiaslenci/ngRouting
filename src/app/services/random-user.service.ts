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

  //? Lista de contactos, recibe un numero de respuestas y si recibe un sexo por queryParams lo filtra
  obtenerRandomContacts(n: number,sexo?:string):Observable<Results> {
    // Guardamos en una const los pramatros que le pasaremos a nuestra petición http
    let params: HttpParams = new HttpParams().set('results', n);
    //! Si recibimos sexo lo filtramos
    if (sexo){
      console.log('Filtrado por mujer / hombre');
      // En ves de usar un set utilizamos un append para agregar el gender a los datos que ya estabamos solicitando
      params = params.append('gender', sexo);
    }
    // Le pasamos los parametros
    return this.http
      .get<Results>('https://randomuser.me/api', { params: params })
      .pipe(
        retry(2), //? numero de reintentos de peticiones
        catchError(this.handleError) //? sacamos error si algo falla
      );
  }
}
