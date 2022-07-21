import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalUsuariosComponent } from './components/Usuarios/principal-usuarios/principal-usuarios.component';
import { VerProductoComponent } from './components/Usuarios/ver-producto/ver-producto.component';

const routes: Routes = [
  {path :'usuarios', component:PrincipalUsuariosComponent},
  {path :'usuarios/verProducto', component:VerProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
