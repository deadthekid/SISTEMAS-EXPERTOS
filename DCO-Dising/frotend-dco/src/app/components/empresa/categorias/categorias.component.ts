import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private empresaServicio: empresaService) { }
  logo!: string
  categorias!: []


  agregarForm = new FormGroup({
    categoria: new FormControl('', [Validators.required]),
    idEmpresa: new FormControl(window.localStorage.getItem('usuario'))
  })
  editForm = new FormGroup({
    categoria: new FormControl('', [Validators.required]),
    idEmpresa: new FormControl(window.localStorage.getItem('usuario')),
    seleccionado: new FormControl('', [Validators.required]),
  })
  delForm = new FormGroup({
    categoria: new FormControl('', [Validators.required]),
    idEmpresa: new FormControl(window.localStorage.getItem('usuario'))
  })
  updForm = new FormGroup({
    categoria: new FormControl('', [Validators.required]),
    idEmpresa: new FormControl(window.localStorage.getItem('usuario'))
  })

  ngOnInit(): void {
    this.seguridad()
    this.logoEmpresa()
  }
  seguridad() {
    if (!window.localStorage.getItem('usuario')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta para ingresar a esa pagina')
    } else {
    }
  }
  logoEmpresa() {
    this.empresaServicio.logo(window.localStorage.getItem('usuario')!).subscribe((res) => {
      this.logo = res[0].logo
    })
  }

  //agregar una categoria
  agregar() {
    console.log(this.agregarForm.value)
    this.empresaServicio.aggCategoria(this.agregarForm.value).subscribe((res) => {
      console.log(res)
      this.toastr.success('Categoria agregada con exito')
    })
    this.categoria?.setValue('')
  }
  get categoria() {
    return this.agregarForm.get('categoria')
  }
  
  //editar una categoria

  cargarSelectEditar() {
    this.empresaServicio.getCategorias(window.localStorage.getItem('usuario')!).subscribe((res) => {
      this.categorias = res[0].categorias
    })
  }
  editar(){
    this.empresaServicio.editCategorias(this.editForm.value).subscribe((res)=>{
      console.log(res)
      this.editForm.get('seleccionado')?.setValue('')
      this.editForm.get('categoria')?.setValue('')
      this.toastr.success('Categoria actualizada con exito')
    })
  }
  cargarSelectEliminar() {
    this.empresaServicio.getCategorias(window.localStorage.getItem('usuario')!).subscribe((res) => {
      this.categorias = res[0].categorias
    })
  }
  eliminar(){
    this.empresaServicio.delCategorias(this.delForm.value.idEmpresa!,this.delForm.value.categoria!).subscribe((res)=>{
      console.log(res)
      this.toastr.success('Categoria eliminada con exito')
    })
  }
}
