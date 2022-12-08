import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ?Importaciones para servicios
import { FormsModule } from '@angular/forms'; // Para el formulario
import { HttpClientModule } from '@angular/common/http'; // Para solicitar apis

// ?Paginas de rutas
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactDetailPageComponent,
    ContactsPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
