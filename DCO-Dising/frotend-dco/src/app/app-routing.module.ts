import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActualizarInfoComponent} from './components/empresa/actualizar-info/actualizar-info.component'
import { HistorialComponent } from './components/empresa/historial/historial.component';
import {LoginComponent} from './components/empresa/login/login.component'
import {MultimediaComponent} from './components/empresa/multimedia/multimedia.component'
import {PrincipalComponent} from './components/empresa/principal/principal.component'
import {RegistrarComponent} from './components/empresa/registrar/registrar.component'
import {RegistroComponent} from './components/empresa/registro/registro.component'
import { VideosComponent } from './components/empresa/videos/videos.component';
import { ImagenesComponent } from './components/empresa/imagenes/imagenes.component';
import { OtrosArchivosComponent } from './components/empresa/otros-archivos/otros-archivos.component';
import { DetallesArchivosComponent } from './components/empresa/detalles-archivos/detalles-archivos.component';

const routes: Routes = [
  {path: 'empresa/actualizarInfo',component:ActualizarInfoComponent},
  {path: 'empresa/historial',component:HistorialComponent},
  {path: 'empresa/login',component:LoginComponent},
  {path: 'empresa/multimedia',component:MultimediaComponent},
  {path: 'empresa/principal',component:PrincipalComponent},
  {path: 'empresa/registrar',component:RegistrarComponent},
  {path: 'empresa/registro',component:RegistroComponent},
  {path: 'empresa/videos',component:VideosComponent},
  {path: 'empresa/imagenes',component:ImagenesComponent},
  {path: 'empresa/otrosArchivos',component:OtrosArchivosComponent},
  {path: 'empresa/detalleArchivos/:id',component:DetallesArchivosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
