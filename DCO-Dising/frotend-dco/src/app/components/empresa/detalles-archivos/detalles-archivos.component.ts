import { Component, OnInit, Sanitizer, ɵ_sanitizeUrl } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { archivoService } from 'src/app/services/archivo.service';
import { empresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-detalles-archivos',
  templateUrl: './detalles-archivos.component.html',
  styleUrls: ['./detalles-archivos.component.css']
})
export class DetallesArchivosComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private archivoServicio: archivoService, private empresaServicio: empresaService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.seguridad()
    this.idArchivoURL()
  }
  descarga: any
  tipo!: string
  idArchivo!: string
  detalles = {
    nombre: '',
    shortcut: '',
    visualizar: '',
    archivo: ''
  }
  archivo!: string;
  visualizar!: string;
  uploadedFiles!: Array<File>;
  infoArchivo = new FormGroup({
    archivo: new FormControl('', [Validators.required])
  })
  seguridad() {
    if (!window.localStorage.getItem('empresa')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina')
    } else {
      this.empresaServicio.seguridad(window.localStorage.getItem('empresa')!).subscribe((res) => {
        if (res == null) {
          this.router.navigate(['/'])
          this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina', 'ERROR')
          window.localStorage.removeItem('empresa')
        }
      })
    }
  }
  cerrarSesion() {

    window.localStorage.removeItem('empresa')
    this.toastr.success('Cierre de sesión exitoso')
    this.router.navigate(['/empresa/login'])
  }
  idArchivoURL() {
    this.idArchivo = window.location.href.split('/')[5]
    this.jalarDetalles(this.idArchivo)
  }
  jalarDetalles(idArchivo: string) {
    this.archivoServicio.detalles(idArchivo).subscribe((res) => {
      if (res == null) {

        this.toastr.error('Esa página no contiene datos o no existe, no hay nada que hacer ahí', 'Acceso denegado')
        this.router.navigate(['/empresa/multimedia'])
      } else {
        if (res.name == 'CastError') {
          this.toastr.error('Esa página no contiene datos o no existe, no hay nada que hacer ahí', 'Acceso denegado')
          this.router.navigate(['/empresa/multimedia'])
        } else {

          this.detalles.nombre = res[0].nombre
          this.detalles.archivo = res[0].archivo
          this.descarga = this.getFileContent(res[0].archivo)

          this.detalles.shortcut = res[0].shortcut
          if (!(res[0].tipo == 'mp4' || res[0].tipo == 'mov' || res[0].tipo == 'wmv' || res[0].tipo == 'avi' || res[0].tipo == 'mkv' || res[0].tipo == 'webm' || res[0].tipo == 'apng' || res[0].tipo == 'gif' || res[0].tipo == 'ico' || res[0].tipo == 'jpeg' || res[0].tipo == 'png' || res[0].tipo == 'svg')) {
            this.detalles.visualizar = 'https://media.istockphoto.com/vectors/file-folder-office-supply-icon-vector-id1182976811?k=20&m=1182976811&s=612x612&w=0&h=vV6IdJW0drWpPcvlen_pOa8jgw41mqdpcaZn-mxoYLg='
            this.tipo = res[0].tipo
          }
          if (res[0].tipo == 'apng' || res[0].tipo == 'gif' || res[0].tipo == 'ico' || res[0].tipo == 'jpeg' || res[0].tipo == 'png' || res[0].tipo == 'svg') {
            this.detalles.visualizar = res[0].archivo
            this.tipo = res[0].tipo
          }
          if (res[0].tipo == 'mp4' || res[0].tipo == 'mov' || res[0].tipo == 'wmv' || res[0].tipo == 'avi' || res[0].tipo == 'mkv' || res[0].tipo == 'webm') {
            this.detalles.visualizar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_dntwmphiLeJafmYwujdbtYtpkbjchIMZA&usqp=CAU"
            this.tipo = res[0].tipo
          }
        }
      }
    })
  }

  getFileContent(datos: string) {
    return this.sanitizer.bypassSecurityTrustUrl(datos)
  }

  subir(element: any) {
    this.uploadedFiles = element.target.files;


    //previsualizacion de la imagen que se subira y creacion del b64 que se guardará para generar el logo o cualquier archivo que se quiera subir

    if (this.uploadedFiles[0].type.split('/')[1] != 'apng' && this.uploadedFiles[0].type.split('/')[1] != 'gif' && this.uploadedFiles[0].type.split('/')[1] != 'ico' && this.uploadedFiles[0].type.split('/')[1] != 'jpeg' && this.uploadedFiles[0].type.split('/')[1] != 'png' && this.uploadedFiles[0].type.split('/')[1] != 'svg') {
      this.visualizar = 'https://media.istockphoto.com/vectors/file-folder-office-supply-icon-vector-id1182976811?k=20&m=1182976811&s=612x612&w=0&h=vV6IdJW0drWpPcvlen_pOa8jgw41mqdpcaZn-mxoYLg='

      const reader = new FileReader()
      reader.onload = () => this.archivo = reader.result as string
      reader.readAsDataURL(this.uploadedFiles[0])
    } else {
      const reader = new FileReader()
      reader.onload = () => this.archivo = reader.result as string
      reader.readAsDataURL(this.uploadedFiles[0])
      const reader2 = new FileReader()
      reader2.onload = () => this.visualizar = reader2.result as string
      reader2.readAsDataURL(this.uploadedFiles[0])

    }

  }

  actualizar() {
    let infoArchivo = {
      tipo: this.uploadedFiles[0].type.split('/')[1],
      nombre: this.uploadedFiles[0].name,
      tamano: this.uploadedFiles[0].size,
      archivo: '',
      idEmpresa: window.localStorage.getItem('empresa')
    }
    infoArchivo.archivo = this.archivo
    this.archivoServicio.actualizar(infoArchivo, this.idArchivo).subscribe((res) => {
      this.toastr.success('Aviso: puede que tarde unos segundos en cargar los datos', 'Actualizacion de archivo exitosa')
      this.jalarDetalles(this.idArchivo)
    })
  }
  eliminar() {
    this.archivoServicio.eliminar(this.idArchivo, window.localStorage.getItem('empresa')!).subscribe((res) => {
      this.toastr.success('Archivo eliminado con exito')


      if (!(this.tipo == 'mp4' || this.tipo == 'mov' || this.tipo == 'wmv' || this.tipo == 'avi' || this.tipo == 'mkv' || this.tipo == 'webm' || this.tipo == 'apng' || this.tipo == 'gif' || this.tipo == 'ico' || this.tipo == 'jpeg' || this.tipo == 'png' || this.tipo == 'svg')) {
        this.detalles.visualizar = 'https://media.istockphoto.com/vectors/file-folder-office-supply-icon-vector-id1182976811?k=20&m=1182976811&s=612x612&w=0&h=vV6IdJW0drWpPcvlen_pOa8jgw41mqdpcaZn-mxoYLg='
        this.tipo = 'otrosArchivos'
      }
      if (this.tipo == 'apng' || this.tipo == 'gif' || this.tipo == 'ico' || this.tipo == 'jpeg' || this.tipo == 'png' || this.tipo == 'svg') {
        this.detalles.visualizar = this.archivo
        this.tipo = 'imagenes'
      }
      if (this.tipo == 'mp4' || this.tipo == 'mov' || this.tipo == 'wmv' || this.tipo == 'avi' || this.tipo == 'mkv' || this.tipo == 'webm') {
        this.detalles.visualizar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_dntwmphiLeJafmYwujdbtYtpkbjchIMZA&usqp=CAU"
        this.tipo = 'videos'
      }

      this.router.navigate(['/empresa/' + this.tipo])
      window.location.href = '/empresa/' + this.tipo
    })
  }
}
