import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalUsuariosComponent } from './components/Usuarios/principal-usuarios/principal-usuarios.component';
import { VerProductoComponent } from './components/Usuarios/ver-producto/ver-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalUsuariosComponent,
    VerProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
