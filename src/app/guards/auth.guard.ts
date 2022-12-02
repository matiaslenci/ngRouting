import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; //* importamos Router para el constructor

import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {} // *Declaramos el constructor con el router

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token = sessionStorage.getItem('token');

    // ?return true --> Cargamos la ruta
    // !return false --> No cargamos la ruta

    if (token) {
      return true; //? Si el nos logiamos navegaresmos a contactos
    } else {
      this.router.navigate(['login']); //! Si el token no coincide, nos redirije a login-page
      return false;
    }
  }
}
