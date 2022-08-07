import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empresaService } from 'src/app/services/empresa.service';

import { read } from '@popperjs/core';
@Component({
  selector: 'app-actualizar-info',
  templateUrl: './actualizar-info.component.html',
  styleUrls: ['./actualizar-info.component.css']
})


export class ActualizarInfoComponent implements OnInit {
  uploadedFiles!: Array<File>;
  validarContras: boolean=false
  actualizar = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    logo: new FormControl("",),
    descripcion: new FormControl('', [Validators.required]),
    contrasena: new FormControl({value:'', disabled: true}, [Validators.required]),
    confirmar: new FormControl('', [Validators.required]),
  })

  archivo!: string;

  constructor(private router: Router, private toastr: ToastrService, private empresaServicio: empresaService) { }

  ngOnInit(): void {
    this.seguridad()
    this.rellenarInfo()
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
  rellenarInfo() {
    this.empresaServicio.rellenar(window.localStorage.getItem('usuario')!).subscribe((res) => {
      this.nombre?.setValue(res.nombre)
      this.correo?.setValue(res.correo)
      this.descripcion?.setValue(res.descripcion)
      this.contrasena?.setValue(res.contrasena)
      this.confirmar?.setValue(res.confirmar)
      this.archivo=res.logo
    })
  }


  subir(element: any) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles)
    
    //previsualizacion de la imagen que se subira y creacion del b64 que se guardará para generar el logo o cualquier archivo que se quiera subir
    const reader = new FileReader()
    reader.onload = () => this.archivo = reader.result as string
    reader.readAsDataURL(this.uploadedFiles[0])
    console.log(this.archivo)
  }
  

  actualizarInfo() {
    
    let datos={
      idEmpresa: window.localStorage.getItem('usuario'),
      nombre: this.nombre?.value,
      correo: this.correo?.value,
      descripcion: this.descripcion?.value,
      contrasena: this.contrasena?.value,
      logo: this.archivo
    }

    this.empresaServicio.actualizar(datos).subscribe((res) => {
      this.toastr.success('Informción actualizada de forma exitos')
      this.router.navigate(['/empresa/principal'])
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
  get visualizar() {
    return this.actualizar.get('visualizar')
  }
}
