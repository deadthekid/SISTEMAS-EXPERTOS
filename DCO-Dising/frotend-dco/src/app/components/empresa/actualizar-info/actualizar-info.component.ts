import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empresaService } from 'src/app/services/empresa.service';
import { UploadService } from 'src/app/services/upload/upload.service';
@Component({
  selector: 'app-actualizar-info',
  templateUrl: './actualizar-info.component.html',
  styleUrls: ['./actualizar-info.component.css']
})


export class ActualizarInfoComponent implements OnInit {
  uploadedFiles!: Array<File>;
  validarContras!: boolean
  actualizar = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    logo: new FormControl('',),
    descripcion: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
    confirmar: new FormControl('', [Validators.required]),
  })

  constructor(private router: Router, private toastr: ToastrService, private empresaServicio: empresaService, private uploadServicio: UploadService) { }

  ngOnInit(): void {
    this.seguridad()
  }

  validarContrasenas() {
    if (this.contrasena?.value === this.confirmar?.value) {
      this.validarContras = true
      console.log("probando validar contraseñasa, debe ser true", this.validarContras)
    } else {
      console.log("probando validar contraseñasa, debe ser false", this.validarContras)
      this.validarContras = false
    }
    /*if(this.contrasena?.value===null && this.confirmar?.value===null){
      console.log("campos vacios")
    }*/
  }

  seguridad() {
    if (!window.localStorage.getItem('usuario')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta para ingresar a esa pagina')
    } else {

    }
  }



  subir(element: any) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles)
  }

  probar() {
    let formData = new FormData();
    if(this.uploadedFiles){
      for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
      }
    }
    formData.append("idEmpresa",window.localStorage.getItem('usuario')!)
    formData.append("nombre",this.nombre?.value!)
    formData.append("correo",this.correo?.value!)
    formData.append("logo",this.logo?.value!)
    formData.append("descripcion",this.descripcion?.value!)
    formData.append("contrasena",this.contrasena?.value!)

    this.uploadServicio.uploadFile(formData).subscribe((res) => {
      console.log('el servidor responde: ', res);
    });
  }



  get nombre() {
    return this.actualizar.get('nombre')
  }
  get correo() {
    return this.actualizar.get('correo')
  }
  get logo() {
    return this.actualizar.get('logo')
  }
  get descripcion() {
    return this.actualizar.get('descripcion')
  }
  get contrasena() {
    return this.actualizar.get('contrasena')
  }
  get confirmar() {
    return this.actualizar.get('confirmar')
  }
}
