import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { archivoService } from 'src/app/services/archivo.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: any
  public page!: number
  constructor(private router: Router, private toastr: ToastrService, private archivoServicio: archivoService) { }

  ngOnInit(): void {
    this.seguridad()
    this.listaVideos()
  }
  seguridad() {
    if (!window.localStorage.getItem('usuario')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta para ingresar a esa pagina')
    }
  }
  listaVideos() {
    this.archivoServicio.listaVideos(window.localStorage.getItem('usuario')!).subscribe((res) => {
      try {
        let listaVideos = []
        for (let i = 0; i < res.length; i++) {
          const element = res[i];
          let info = {
            datos: element.archivo,
            nombre: element.nombre,
            id: element._id
          }
          console.log(element)
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
