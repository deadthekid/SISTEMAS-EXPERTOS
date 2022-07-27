import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/administracion/login/login.component';
import { HomeComponent } from './components/administracion/home/home.component';
import { EmpresasComponent } from './components/administracion/empresas/empresas.component';
import { UsuariosComponent } from './components/administracion/usuarios/usuarios.component';
import { PlanesComponent } from './components/administracion/planes/planes.component';
import { TemasComponent } from './components/administracion/temas/temas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmpresasComponent,
    UsuariosComponent,
    PlanesComponent,
    TemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
