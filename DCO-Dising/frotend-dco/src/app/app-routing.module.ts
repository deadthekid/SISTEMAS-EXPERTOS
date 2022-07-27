import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/administracion/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/administracion/admin-login/admin-login.component';

const routes: Routes = [
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/home', component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
