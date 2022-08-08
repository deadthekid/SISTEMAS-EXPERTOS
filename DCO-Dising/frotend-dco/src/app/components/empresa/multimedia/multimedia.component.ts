import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empresaService } from 'src/app/services/empresa.service';
import { archivoService } from 'src/app/services/archivo.service';
@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private empresaServicio: empresaService, private archivoServicio: archivoService) { }
  logo!: string
  archivo!: string;
  archivo2!: string;
  uploadedFiles!: Array<File>;

  infoArchivo = new FormGroup({
    archivo: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.seguridad()
    this.logoEmpresa()
  }
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
  logoEmpresa() {
    this.empresaServicio.logo(window.localStorage.getItem('empresa')!).subscribe((res) => {
      this.logo = res[0].logo
    })
  }
  subir(element: any) {
    this.uploadedFiles = element.target.files;


    //previsualizacion de la imagen que se subira y creacion del b64 que se guardará para generar el logo o cualquier archivo que se quiera subir

    if (this.uploadedFiles[0].type.split('/')[1] != 'apng' && this.uploadedFiles[0].type.split('/')[1] != 'gif' && this.uploadedFiles[0].type.split('/')[1] != 'ico' && this.uploadedFiles[0].type.split('/')[1] != 'jpeg' && this.uploadedFiles[0].type.split('/')[1] != 'png' && this.uploadedFiles[0].type.split('/')[1] != 'svg') {
      this.archivo2 = 'https://media.istockphoto.com/vectors/file-folder-office-supply-icon-vector-id1182976811?k=20&m=1182976811&s=612x612&w=0&h=vV6IdJW0drWpPcvlen_pOa8jgw41mqdpcaZn-mxoYLg='

      const reader = new FileReader()
      reader.onload = () => this.archivo = reader.result as string
      reader.readAsDataURL(this.uploadedFiles[0])
    } else {
      const reader = new FileReader()
      reader.onload = () => this.archivo = reader.result as string
      reader.readAsDataURL(this.uploadedFiles[0])
      const reader2 = new FileReader()
      reader2.onload = () => this.archivo2 = reader2.result as string
      reader2.readAsDataURL(this.uploadedFiles[0])
    }

  }

  agregar() {
    let infoArchivo = {
      tipo: this.uploadedFiles[0].type.split('/')[1],
      nombre: this.uploadedFiles[0].name,
      tamano: this.uploadedFiles[0].size,
      archivo: '',
      idEmpresa: window.localStorage.getItem('empresa'),
      shortcut: ''
    }
    //4mb pasados a bytes
    if (infoArchivo.tamano > (10 * 1024 * 1024)) {
      this.toastr.error('Tamaño maximo de archivos: 4mb', 'Tamaño excedido')
    } else {
      infoArchivo.archivo = this.archivo
      this.archivoServicio.agregar(infoArchivo).subscribe((res) => {
        this.toastr.success('Archivo agregado de forma exitosa')
        this.infoArchivo.get('archivo')?.setValue('')
      })
    }

  }




  get getArchivo() {
    return this.infoArchivo.get('archivo')
  }
  get getTipo() {
    return this.infoArchivo.get('tipo')
  }
  get getTamaño() {
    return this.infoArchivo.get('tamaño')
  }
  get getNombre() {
    return this.infoArchivo.get('nombre')
  }
}
