import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/empresa/login/login.component';
import { RegistroComponent } from './components/empresa/registro/registro.component';
import { PrincipalComponent } from './components/empresa/principal/principal.component';
import { MultimediaComponent } from './components/empresa/multimedia/multimedia.component';
import { ActualizarInfoComponent } from './components/empresa/actualizar-info/actualizar-info.component';
import { HistorialComponent } from './components/empresa/historial/historial.component';
import { DetallesArchivosComponent } from './components/empresa/detalles-archivos/detalles-archivos.component';
import { ImagenesComponent } from './components/empresa/imagenes/imagenes.component';
import { VideosComponent } from './components/empresa/videos/videos.component';
import { OtrosArchivosComponent } from './components/empresa/otros-archivos/otros-archivos.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { PrincipalUsuariosComponent } from './components/Usuarios/principal-usuarios/principal-usuarios.component';
import { VerProductoComponent } from './components/Usuarios/ver-producto/ver-producto.component';
import { CreacionUsuarioComponent } from './components/Usuarios/creacion-usuario/creacion-usuario.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciarUsuarioComponent } from './components/Usuarios/iniciar-usuario/iniciar-usuario.component';
import { PrincipalUsuariosAutenticadoComponent } from './components/Usuarios/principal-usuarios-autenticado/principal-usuarios-autenticado.component';
import { AdminLoginComponent } from './components/administracion/admin-login/admin-login.component';
import { AdminUsuariosComponent } from './components/administracion/admin-usuarios/admin-usuarios.component';
import { AdminTemasComponent } from './components/administracion/admin-temas/admin-temas.component';
import { AdminPlanesComponent } from './components/administracion/admin-planes/admin-planes.component';
import { AdminNuevoUsuarioComponent } from './components/administracion/admin-nuevo-usuario/admin-nuevo-usuario.component';
import { AdminNuevoTemaComponent } from './components/administracion/admin-nuevo-tema/admin-nuevo-tema.component';
import { AdminNuevoPlanComponent } from './components/administracion/admin-nuevo-plan/admin-nuevo-plan.component';
import { AdminNavbarComponent } from './components/administracion/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './components/administracion/admin-home/admin-home.component';
import { AdminEmpresasComponent } from './components/administracion/admin-empresas/admin-empresas.component';
import { AdminDetallesUsuarioComponent } from './components/administracion/admin-detalles-usuario/admin-detalles-usuario.component';
import { AdminDetallesTemaComponent } from './components/administracion/admin-detalles-tema/admin-detalles-tema.component';
import { AdminDetallesPlanComponent } from './components/administracion/admin-detalles-plan/admin-detalles-plan.component';
import { AdminDetallesEmpresaComponent } from './components/administracion/admin-detalles-empresa/admin-detalles-empresa.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CreacionProductoComponent } from './components/empresa/creacion-producto/creacion-producto.component';
import { CategoriasComponent } from './components/empresa/categorias/categorias.component';

import { ProductosComponent } from './components/empresa/productos/productos.component';
import { VerProductosComponent } from './components/empresa/ver-productos/ver-productos.component';
import { DetalleProductoComponent } from './components/empresa/detalle-producto/detalle-producto.component';
import { PlanesComponent } from './components/planes/planes.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';

import { VerProductoAutenticadoComponent } from './components/Usuarios/ver-producto-autenticado/ver-producto-autenticado.component';
import { RealizarCompraComponent } from './components/Usuarios/realizar-compra/realizar-compra.component';
import { PaginaCreacionComponent } from './components/Usuarios/pagina-creacion/pagina-creacion.component';
import { PipePipe } from './pipes/pipe.pipe';
import { AdministrarPaginasComponent } from './components/empresa/administrar-paginas/administrar-paginas.component';
import { VerPaginasComponent } from './components/empresa/ver-paginas/ver-paginas.component';
import { DetallePaginaComponent } from './components/empresa/detalle-pagina/detalle-pagina.component';
import { EditarPaginaComponent } from './components/empresa/editar-pagina/editar-pagina.component';
import { CrearPaginaComponent } from './components/empresa/crear-pagina/crear-pagina.component';
import { PaginaVerCreacionComponent } from './components/Usuarios/pagina-ver-creacion/pagina-ver-creacion.component';
import { AdminEditarTemaComponent } from './components/administracion/admin-editar-tema/admin-editar-tema.component';
import { PaginaVerCreacionDosComponent } from './components/Usuarios/pagina-ver-creacion-dos/pagina-ver-creacion-dos.component';
import { PaginaVerCreacionTresComponent } from './components/Usuarios/pagina-ver-creacion-tres/pagina-ver-creacion-tres.component';
import { PlantillaSeleccionComponent } from './components/empresa/plantilla-seleccion/plantilla-seleccion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PrincipalComponent,
    MultimediaComponent,
    ActualizarInfoComponent,
    HistorialComponent,
    DetallesArchivosComponent,
    ImagenesComponent,
    VideosComponent,
    OtrosArchivosComponent,
    PrincipalUsuariosComponent,
    VerProductoComponent,
    CreacionUsuarioComponent,
    IniciarUsuarioComponent,
    PrincipalUsuariosAutenticadoComponent,
    AdminLoginComponent,
    AdminUsuariosComponent,
    AdminTemasComponent,
    AdminPlanesComponent,
    AdminNuevoUsuarioComponent,
    AdminNuevoTemaComponent,
    AdminNuevoPlanComponent,
    AdminNavbarComponent,
    AdminHomeComponent,
    AdminEmpresasComponent,
    AdminDetallesUsuarioComponent,
    AdminDetallesTemaComponent,
    AdminDetallesPlanComponent,
    AdminDetallesEmpresaComponent,
    LandingPageComponent,
    CreacionProductoComponent,
    CategoriasComponent,
    ProductosComponent,
    VerProductosComponent,
    DetalleProductoComponent,
    PlanesComponent,
    TiendasComponent,
    VerProductoAutenticadoComponent,
    RealizarCompraComponent,
    PaginaCreacionComponent,
    PipePipe,
    AdministrarPaginasComponent,
    VerPaginasComponent,
    DetallePaginaComponent,
    EditarPaginaComponent,
    CrearPaginaComponent,
    PaginaVerCreacionComponent,
    AdminEditarTemaComponent,
    PaginaVerCreacionDosComponent,
    PaginaVerCreacionTresComponent,
    PlantillaSeleccionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
