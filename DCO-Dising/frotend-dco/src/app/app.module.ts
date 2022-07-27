import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    OtrosArchivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
