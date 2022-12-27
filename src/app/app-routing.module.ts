import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importamos las paginas
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Si la ruta esta vacia se envia a la home page por defecto
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home', // nombre de la ruta
    component: HomePagesComponent, // nombre del componente que queremos cargar
    children: [
      {
        path: 'hijo',
        pathMatch: 'full',
        component: HomePagesComponent, // aqui podriamos cargar otro componente
      },
    ],
    canActivate: [AuthGuard],
  },
  // Ruta
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [AuthGuard], //? Guard de autentificación
  },
  // Subruta
  {
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
  },
  {
    path: 'random',
    component: RandomContactPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**', // Si la ruta no coincide con ninguna de las rutas establecidas carga el componente Error 404
    component: NotFoundPageComponent,
  },
  // Error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
