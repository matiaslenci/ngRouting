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
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';

const routes: Routes = [
  // Si la ruta esta vacia se envia a la home page por defecto
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard/home',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home', // nombre de la ruta
        component: HomePagesComponent, // nombre del componente que queremos cargar
        canActivate: [AuthGuard],
      },
      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AuthGuard], //? Guard de autentificación
      },
      // Subruta
      {
        path: 'contacts/:id',
        component: ContactDetailPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'random',
        component: RandomContactPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'task',
        component: TaskPageComponent,
        canActivate: [AuthGuard],
      }
    ],
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
