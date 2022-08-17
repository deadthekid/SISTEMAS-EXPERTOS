import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { archivoService } from 'src/app/services/archivo.service';
import { empresaService } from 'src/app/services/empresa.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: any
  public page!: number
  constructor(private router: Router, private toastr: ToastrService, private archivoServicio: archivoService, private empresaServicio: empresaService) { }

  ngOnInit(): void {
    if(this.seguridad()) this.listaVideos()
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
    window.localStorage.removeItem('usuario')
    window.localStorage.removeItem('usuarioAdmin')
    window.localStorage.removeItem('carrito')
          valido=false
        }
      })
    }
    return valido
  }
  cerrarSesion(){
    console.log('dio click en cerrar sesion')
    window.localStorage.removeItem('empresa')
    window.localStorage.removeItem('usuario')
    window.localStorage.removeItem('usuarioAdmin')
    window.localStorage.removeItem('carrito')
    this.toastr.success('Cierre de sesión exitoso')
    this.router.navigate(['/'])
  }
  listaVideos() {
    this.archivoServicio.listaVideos(window.localStorage.getItem('empresa')!).subscribe((res) => {
      try {
        let listaVideos = []
        for (let i = 0; i < res.length; i++) {
          const element = res[i];
          let info = {
            datos: element.archivo,
            nombre: element.nombre,
            id: element._id
          }
          listaVideos.push(info)
          this.videos = listaVideos
          
        }
      } catch (e) {
        this.toastr.error('Error en la obtención de la informacion')
      }
      if(this.videos==undefined){
        this.toastr.error('No hay videos para mostrar')
      }
    })
  }
  detalles(idArchivo:string){
    this.router.navigate(['/empresa/detalleArchivos/'+idArchivo])
  }
}
