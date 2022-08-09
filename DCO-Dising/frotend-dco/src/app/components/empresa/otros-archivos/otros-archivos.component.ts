import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { archivoService } from 'src/app/services/archivo.service';
import { empresaService } from 'src/app/services/empresa.service';
@Component({
  selector: 'app-otros-archivos',
  templateUrl: './otros-archivos.component.html',
  styleUrls: ['./otros-archivos.component.css']
})
export class OtrosArchivosComponent implements OnInit {

  otrosArchivos: any
  public page!: number
  constructor(private router: Router, private toastr: ToastrService, private archivoServico: archivoService, private empresaServicio: empresaService) { }

  ngOnInit(): void {
    if(this.seguridad()) this.listaArchivos()
  }
  seguridad() {
    let valido=true
    if (!window.localStorage.getItem('empresa')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina')
      valido=false
    } else {
      this.empresaServicio.seguridad(window.localStorage.getItem('empresa')!).subscribe((res) => {
        if (res == null) {
          this.router.navigate(['/'])
          this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina','ERROR')
          window.localStorage.removeItem('empresa')
          valido=false
        }
      })
    }
    return valido
  }
  cerrarSesion(){
    console.log('dio click en cerrar sesion')
    window.localStorage.removeItem('empresa')
    this.toastr.success('Cierre de sesión exitoso')
    this.router.navigate(['/empresa/login'])
  }
  listaArchivos() {
    this.archivoServico.listaOtrosArchivos(window.localStorage.getItem('empresa')!).subscribe((res) => {
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
      if(this.otrosArchivos==undefined){
        this.toastr.error('No hay archivos para mostrar')
      }
    })
  }
  detalles(idArchivo: string) {
    this.router.navigate(['/empresa/detalleArchivos/' + idArchivo])
  }

}
