import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionUsuarioComponent } from './components/Usuarios/creacion-usuario/creacion-usuario.component';
import { IniciarUsuarioComponent } from './components/Usuarios/iniciar-usuario/iniciar-usuario.component';
import { PrincipalUsuariosAutenticadoComponent } from './components/Usuarios/principal-usuarios-autenticado/principal-usuarios-autenticado.component';
import { PrincipalUsuariosComponent } from './components/Usuarios/principal-usuarios/principal-usuarios.component';
import { VerProductoComponent } from './components/Usuarios/ver-producto/ver-producto.component';

const routes: Routes = [
  {path :'usuarios', component:PrincipalUsuariosComponent},
  {path :'usuarios/verProducto', component:VerProductoComponent},
  {path :'usuarios/crearUsuario', component:CreacionUsuarioComponent},
  {path :'usuarios/inicioUsuario', component:IniciarUsuarioComponent},
  {path :'usuarios/usaurio/inicio', component:PrincipalUsuariosAutenticadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
