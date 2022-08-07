import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { archivoService } from 'src/app/services/archivo.service';
@Component({
  selector: 'app-otros-archivos',
  templateUrl: './otros-archivos.component.html',
  styleUrls: ['./otros-archivos.component.css']
})
export class OtrosArchivosComponent implements OnInit {

  otrosArchivos: any
  public page!: number
  constructor(private router: Router, private toastr: ToastrService, private archivoServico: archivoService) { }

  ngOnInit(): void {
    this.seguridad()
    this.listaArchivos()
  }
  seguridad() {
    if (!window.localStorage.getItem('usuario')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta para ingresar a esa pagina')
    }
  }
  cerrarSesion(){
    console.log('dio click en cerrar sesion')
    window.localStorage.removeItem('usuario')
    this.toastr.success('Cierre de sesión exitoso')
    this.router.navigate(['/empresa/login'])
  }
  listaArchivos() {
    this.archivoServico.listaOtrosArchivos(window.localStorage.getItem('usuario')!).subscribe((res) => {
      try {
        let listaOtrosArchivos = []
        for (let i = 0; i < res.length; i++) {
          const element = res[i];
          let info = {
            datos: element.archivo,
            nombre: element.nombre,
            id: element._id
          }
          listaOtrosArchivos.push(info)
          this.otrosArchivos = listaOtrosArchivos
        }
      } catch (e) {
        this.toastr.error('No hay ninguna imagen valida disponible en la base de datos')
      }
    })
  }
  detalles(idArchivo: string) {
    this.router.navigate(['/empresa/detalleArchivos/' + idArchivo])
  }

}
