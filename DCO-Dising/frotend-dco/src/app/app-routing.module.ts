import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActualizarInfoComponent} from './components/empresa/actualizar-info/actualizar-info.component'
import {GaleriaComponent} from './components/empresa/galeria/galeria.component'
import {GaleriaDetallesComponent} from './components/empresa/galeria-detalles/galeria-detalles.component'
import { HistorialComponent } from './components/empresa/historial/historial.component';
import {LoginComponent} from './components/empresa/login/login.component'
import {MultimediaComponent} from './components/empresa/multimedia/multimedia.component'
import {PrincipalComponent} from './components/empresa/principal/principal.component'
import {RegistrarComponent} from './components/empresa/registrar/registrar.component'
import {RegistroComponent} from './components/empresa/registro/registro.component'

const routes: Routes = [
  {path: 'empresa/actualizarInfo',component:ActualizarInfoComponent},
  {path: 'empresa/galeria',component:GaleriaComponent},
  {path: 'empresa/galeriaDetalles',component:GaleriaDetallesComponent},
  {path: 'empresa/historial',component:HistorialComponent},
  {path: 'empresa/login',component:LoginComponent},
  {path: 'empresa/multimedia',component:MultimediaComponent},
  {path: 'empresa/principal',component:PrincipalComponent},
  {path: 'empresa/registrar',component:RegistrarComponent},
  {path: 'empresa/registro',component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
