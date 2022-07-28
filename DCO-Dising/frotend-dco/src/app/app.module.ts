import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from './components/administracion/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/administracion/admin-home/admin-home.component';
import { AdminEmpresasComponent } from './components/administracion/admin-empresas/admin-empresas.component';
import { AdminUsuariosComponent } from './components/administracion/admin-usuarios/admin-usuarios.component';
import { AdminPlanesComponent } from './components/administracion/admin-planes/admin-planes.component';
import { AdminTemasComponent } from './components/administracion/admin-temas/admin-temas.component';
import { AdminNavbarComponent } from './components/administracion/admin-navbar/admin-navbar.component';
import { AdminDetallesUsuarioComponent } from './components/administracion/admin-detalles-usuario/admin-detalles-usuario.component';
import { AdminDetallesEmpresaComponent } from './components/administracion/admin-detalles-empresa/admin-detalles-empresa.component';
import { AdminDetallesPlanComponent } from './components/administracion/admin-detalles-plan/admin-detalles-plan.component';
import { AdminDetallesTemaComponent } from './components/administracion/admin-detalles-tema/admin-detalles-tema.component';
import { AdminNuevoUsuarioComponent } from './components/administracion/admin-nuevo-usuario/admin-nuevo-usuario.component';
import { AdminNuevoPlanComponent } from './components/administracion/admin-nuevo-plan/admin-nuevo-plan.component';
import { AdminNuevoTemaComponent } from './components/administracion/admin-nuevo-tema/admin-nuevo-tema.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminEmpresasComponent,
    AdminUsuariosComponent,
    AdminPlanesComponent,
    AdminTemasComponent,
    AdminNavbarComponent,
    AdminDetallesUsuarioComponent,
    AdminDetallesEmpresaComponent,
    AdminDetallesPlanComponent,
    AdminDetallesTemaComponent,
    AdminNuevoUsuarioComponent,
    AdminNuevoPlanComponent,
    AdminNuevoTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
