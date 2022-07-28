import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/empresa/login/login.component';
import { RegistroComponent } from './components/empresa/registro/registro.component';
import { PrincipalComponent } from './components/empresa/principal/principal.component';
import { MultimediaComponent } from './components/empresa/multimedia/multimedia.component';
import { RegistrarComponent } from './components/empresa/registrar/registrar.component';
import { ActualizarInfoComponent } from './components/empresa/actualizar-info/actualizar-info.component';
import { HistorialComponent } from './components/empresa/historial/historial.component';
import { DetallesArchivosComponent } from './components/empresa/detalles-archivos/detalles-archivos.component';
import { ImagenesComponent } from './components/empresa/imagenes/imagenes.component';
import { VideosComponent } from './components/empresa/videos/videos.component';
import { OtrosArchivosComponent } from './components/empresa/otros-archivos/otros-archivos.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { PrincipalUsuariosComponent } from './components/Usuarios/principal-usuarios/principal-usuarios.component';
import { VerProductoComponent } from './components/Usuarios/ver-producto/ver-producto.component';
import { CreacionUsuarioComponent } from './components/Usuarios/creacion-usuario/creacion-usuario.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciarUsuarioComponent } from './components/Usuarios/iniciar-usuario/iniciar-usuario.component';
import { PrincipalUsuariosAutenticadoComponent } from './components/Usuarios/principal-usuarios-autenticado/principal-usuarios-autenticado.component';
import { AdminLoginComponent } from './components/administracion/admin-login/admin-login.component';
import { AdminUsuariosComponent } from './components/administracion/admin-usuarios/admin-usuarios.component';
import { AdminTemasComponent } from './components/administracion/admin-temas/admin-temas.component';
import { AdminPlanesComponent } from './components/administracion/admin-planes/admin-planes.component';
import { AdminNuevoUsuarioComponent } from './components/administracion/admin-nuevo-usuario/admin-nuevo-usuario.component';
import { AdminNuevoTemaComponent } from './components/administracion/admin-nuevo-tema/admin-nuevo-tema.component';
import { AdminNuevoPlanComponent } from './components/administracion/admin-nuevo-plan/admin-nuevo-plan.component';
import { AdminNavbarComponent } from './components/administracion/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './components/administracion/admin-home/admin-home.component';
import { AdminEmpresasComponent } from './components/administracion/admin-empresas/admin-empresas.component';
import { AdminDetallesUsuarioComponent } from './components/administracion/admin-detalles-usuario/admin-detalles-usuario.component';
import { AdminDetallesTemaComponent } from './components/administracion/admin-detalles-tema/admin-detalles-tema.component';
import { AdminDetallesPlanComponent } from './components/administracion/admin-detalles-plan/admin-detalles-plan.component';
import { AdminDetallesEmpresaComponent } from './components/administracion/admin-detalles-empresa/admin-detalles-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent,
    MultimediaComponent,
    RegistrarComponent,
    ActualizarInfoComponent,
    HistorialComponent,
    DetallesArchivosComponent,
    ImagenesComponent,
    VideosComponent,
    OtrosArchivosComponent,
    PrincipalUsuariosComponent,
    VerProductoComponent,
    CreacionUsuarioComponent,
    IniciarUsuarioComponent,
    PrincipalUsuariosAutenticadoComponent,
    AdminLoginComponent,
    AdminUsuariosComponent,
    AdminTemasComponent,
    AdminPlanesComponent,
    AdminNuevoUsuarioComponent,
    AdminNuevoTemaComponent,
    AdminNuevoPlanComponent,
    AdminNavbarComponent,
    AdminHomeComponent,
    AdminEmpresasComponent,
    AdminDetallesUsuarioComponent,
    AdminDetallesTemaComponent,
    AdminDetallesPlanComponent,
    AdminDetallesEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
