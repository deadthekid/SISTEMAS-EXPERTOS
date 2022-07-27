import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEmpresasComponent } from './components/administracion/admin-empresas/admin-empresas.component';
import { AdminHomeComponent } from './components/administracion/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/administracion/admin-login/admin-login.component';
import { AdminPlanesComponent } from './components/administracion/admin-planes/admin-planes.component';
import { AdminTemasComponent } from './components/administracion/admin-temas/admin-temas.component';
import { AdminUsuariosComponent } from './components/administracion/admin-usuarios/admin-usuarios.component';

const routes: Routes = [
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/home', component: AdminHomeComponent},
  { path: 'admin/empresas', component: AdminEmpresasComponent},
  { path: 'admin/usuarios', component: AdminUsuariosComponent},
  { path: 'admin/planes', component: AdminPlanesComponent},
  { path: 'admin/temas', component: AdminTemasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
