import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //* importamos el Router

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  // Hacemos un private router
  constructor(private router: Router) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    // ? Si el usuario ya esta logeado no carga el login sino que carga el home
    if (token) {
      this.router.navigate(['home']);
    }
  }

  loginUser(): void {
    //* sessionStorage añadido para autentificación
    sessionStorage.setItem('token', '12345678');
    this.router.navigate(['contacts']);
  }
}
