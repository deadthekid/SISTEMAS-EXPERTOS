import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetallesEmpresaComponent } from './components/administracion/admin-detalles-empresa/admin-detalles-empresa.component';
import { AdminDetallesPlanComponent } from './components/administracion/admin-detalles-plan/admin-detalles-plan.component';
import { AdminDetallesTemaComponent } from './components/administracion/admin-detalles-tema/admin-detalles-tema.component';
import { AdminDetallesUsuarioComponent } from './components/administracion/admin-detalles-usuario/admin-detalles-usuario.component';
import { AdminEmpresasComponent } from './components/administracion/admin-empresas/admin-empresas.component';
import { AdminHomeComponent } from './components/administracion/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/administracion/admin-login/admin-login.component';
import { AdminNuevoPlanComponent } from './components/administracion/admin-nuevo-plan/admin-nuevo-plan.component';
import { AdminNuevoTemaComponent } from './components/administracion/admin-nuevo-tema/admin-nuevo-tema.component';
import { AdminNuevoUsuarioComponent } from './components/administracion/admin-nuevo-usuario/admin-nuevo-usuario.component';
import { AdminPlanesComponent } from './components/administracion/admin-planes/admin-planes.component';
import { AdminTemasComponent } from './components/administracion/admin-temas/admin-temas.component';
import { AdminUsuariosComponent } from './components/administracion/admin-usuarios/admin-usuarios.component';

const routes: Routes = [
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
