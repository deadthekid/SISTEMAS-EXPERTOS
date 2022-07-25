import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/empresa/login/login.component';
import { RegistroComponent } from './components/empresa/registro/registro.component';
import { PrincipalComponent } from './components/empresa/principal/principal.component';
import { MultimediaComponent } from './components/empresa/multimedia/multimedia.component';
import { GaleriaComponent } from './components/empresa/galeria/galeria.component';
import { GaleriaDetallesComponent } from './components/empresa/galeria-detalles/galeria-detalles.component';
import { RegistrarComponent } from './components/empresa/registrar/registrar.component';
import { ActualizarInfoComponent } from './components/empresa/actualizar-info/actualizar-info.component';
import { HistorialComponent } from './components/empresa/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent,
    MultimediaComponent,
    GaleriaComponent,
    GaleriaDetallesComponent,
    RegistrarComponent,
    ActualizarInfoComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
