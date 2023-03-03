import { Injectable } from '@angular/core';
// importamos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //* Inyectamos HttpClient
  constructor(private http: HttpClient) {}

  // ?Login del usuario en ReqRes

  login(email: string, password: string): Observable<any> {
    let body = {
      email: email,
      password: password,
    };

    return this.http.post('https://reqres.in/api/login', body);
    //* "email": "eve.holt@reqres.in",
    //* "password": "cityslicka"

  }
}
