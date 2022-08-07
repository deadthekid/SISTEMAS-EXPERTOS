import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { archivoService } from 'src/app/services/archivo.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenes:any
  public page!: number
  constructor(private router: Router, private toastr: ToastrService, private archivoServico: archivoService) { }

  ngOnInit(): void {
    this.seguridad()
    this.listaImagenes()
  }
  seguridad() {
    if (!window.localStorage.getItem('usuario')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta para ingresar a esa pagina')
    }
  }

  listaImagenes() {
    this.archivoServico.listaImagenes(window.localStorage.getItem('usuario')!).subscribe((res) => {
      try{
        let listaImagenes=[]
        for (let i = 0; i < res.length; i++) {
          const element = res[i];          
          let info={
            datos:element.archivo,
            nombre:element.nombre,
            id: element._id
          }
          console.log(element)
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
