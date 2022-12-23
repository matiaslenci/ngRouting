import { Component, OnInit } from '@angular/core';
//* importamos el Router
import { Router } from '@angular/router';
//* importamos el servicio
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  // *Hacemos un private router e inyectamos el servicio que creamos
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    // ? Si el usuario ya esta logeado no carga el login sino que carga el home
    if (token) {
      this.router.navigate(['home']);
    }
  }

  loginUser(value: any): void {
    let { email, password } = value;

    //? Proceso de autentificación con un servicio
    //* Servicio - variable - datos de login(email, password) - sucribirse al evento
    this.authService.login(email, password).subscribe(
      (response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['home']);
        }
      },
      (error) => {
        console.error(`Ha ocurrido un error al hacer el login: ${error}`);
      },
      () => console.info('Peticion de login terminada')
    );
  }
}
