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
import { CreacionUsuarioComponent } from './components/Usuarios/creacion-usuario/creacion-usuario.component';
import { IniciarUsuarioComponent } from './components/Usuarios/iniciar-usuario/iniciar-usuario.component';
import { PrincipalUsuariosAutenticadoComponent } from './components/Usuarios/principal-usuarios-autenticado/principal-usuarios-autenticado.component';
import { PrincipalUsuariosComponent } from './components/Usuarios/principal-usuarios/principal-usuarios.component';
import { VerProductoComponent } from './components/Usuarios/ver-producto/ver-producto.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AdminLoginComponent } from './components/administracion/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/administracion/admin-home/admin-home.component';
import { AdminEmpresasComponent } from './components/administracion/admin-empresas/admin-empresas.component';
import { AdminUsuariosComponent } from './components/administracion/admin-usuarios/admin-usuarios.component';
import { AdminPlanesComponent } from './components/administracion/admin-planes/admin-planes.component';
import { AdminTemasComponent } from './components/administracion/admin-temas/admin-temas.component';
import { AdminDetallesUsuarioComponent } from './components/administracion/admin-detalles-usuario/admin-detalles-usuario.component';
import { AdminDetallesEmpresaComponent } from './components/administracion/admin-detalles-empresa/admin-detalles-empresa.component';
import { AdminDetallesPlanComponent } from './components/administracion/admin-detalles-plan/admin-detalles-plan.component';
import { AdminDetallesTemaComponent } from './components/administracion/admin-detalles-tema/admin-detalles-tema.component';
import { AdminNuevoUsuarioComponent } from './components/administracion/admin-nuevo-usuario/admin-nuevo-usuario.component';
import { AdminNuevoPlanComponent } from './components/administracion/admin-nuevo-plan/admin-nuevo-plan.component';
import { AdminNuevoTemaComponent } from './components/administracion/admin-nuevo-tema/admin-nuevo-tema.component';
import { CreacionProductoComponent } from './components/Usuarios/creacion-producto/creacion-producto.component';
import { CategoriasComponent } from './components/empresa/categorias/categorias.component';

const routes: Routes = [
  { path: '', component:LandingPageComponent },
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
  {path: 'empresa/detalleArchivos/:id',component:DetallesArchivosComponent},
  {path: 'empresa/categorias',component:CategoriasComponent},
  {path :'usuarios', component:PrincipalUsuariosComponent},
  {path :'usuarios/verProducto/:id', component:VerProductoComponent},
  {path :'usuarios/crearUsuario', component:CreacionUsuarioComponent},
  {path :'usuarios/inicioUsuario', component:IniciarUsuarioComponent},
  {path :'usuarios/usaurio/inicio', component:PrincipalUsuariosAutenticadoComponent},
  {path :'usuarios/usaurio/producto', component:CreacionProductoComponent},
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/empresas', component: AdminEmpresasComponent },
  { path: 'admin/usuarios', component: AdminUsuariosComponent },
  { path: 'admin/planes', component: AdminPlanesComponent },
  { path: 'admin/temas', component: AdminTemasComponent },
  { path: 'admin/usuario/:id', component: AdminDetallesUsuarioComponent },
  { path: 'admin/empresa/:id', component: AdminDetallesEmpresaComponent },
  { path: 'admin/plan/:id', component: AdminDetallesPlanComponent },
  { path: 'admin/tema/:id', component: AdminDetallesTemaComponent },
  { path: 'admin/nuevoUsuario', component: AdminNuevoUsuarioComponent },
  { path: 'admin/nuevoPlan', component: AdminNuevoPlanComponent },
  { path: 'admin/nuevoTema', component: AdminNuevoTemaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
