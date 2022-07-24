import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionUsuarioComponent } from './components/Usuarios/creacion-usuario/creacion-usuario.component';
import { PrincipalUsuariosComponent } from './components/Usuarios/principal-usuarios/principal-usuarios.component';
import { VerProductoComponent } from './components/Usuarios/ver-producto/ver-producto.component';

const routes: Routes = [
  {path :'usuarios', component:PrincipalUsuariosComponent},
  {path :'usuarios/verProducto', component:VerProductoComponent},
  {path :'usuarios/crearUsuario', component:CreacionUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
