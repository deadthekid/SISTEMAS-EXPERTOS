import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { archivoService } from 'src/app/services/archivo.service';
import { empresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenes:any
  public page!: number
  constructor(private router: Router, private toastr: ToastrService, private archivoServico: archivoService, private empresaServicio: empresaService) { }

  ngOnInit(): void {
    this.seguridad()
    this.listaImagenes()
  }
  seguridad() {
    if (!window.localStorage.getItem('empresa')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina')
    } else {
      this.empresaServicio.seguridad(window.localStorage.getItem('empresa')!).subscribe((res) => {
        if (res == null) {
          this.router.navigate(['/'])
          this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina','ERROR')
          window.localStorage.removeItem('empresa')
        }
      })
    }
  }
  cerrarSesion(){
    console.log('dio click en cerrar sesion')
    window.localStorage.removeItem('empresa')
    this.toastr.success('Cierre de sesión exitoso')
    this.router.navigate(['/empresa/login'])
  }
  listaImagenes() {
    this.archivoServico.listaImagenes(window.localStorage.getItem('empresa')!).subscribe((res) => {
      try{
        let listaImagenes=[]
        for (let i = 0; i < res.length; i++) {
          const element = res[i];          
          let info={
            datos:element.archivo,
            nombre:element.nombre,
            id: element._id
          }
          listaImagenes.push(info)
          this.imagenes=listaImagenes
        }
      }catch(e){
        this.toastr.error('No hay ninguna imagen valida disponible en la base de datos')
      }
    })
  }
  detalles(idArchivo:string){
    this.router.navigate(['/empresa/detalleArchivos/'+idArchivo])
  }
}
