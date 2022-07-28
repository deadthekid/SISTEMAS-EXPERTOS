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
    AdminLoginComponent
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
