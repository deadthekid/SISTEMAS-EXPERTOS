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


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminEmpresasComponent,
    AdminUsuariosComponent,
    AdminPlanesComponent,
    AdminTemasComponent
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
