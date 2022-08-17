import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Pagina } from 'src/app/models/pagina';
import { Producto } from 'src/app/models/producto';
import { PaginaService } from 'src/app/services/pagina.service';
import { ProductoService } from 'src/app/services/producto.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { empresaService } from 'src/app/services/empresa.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-con-ayuda',
  templateUrl: './pagina-con-ayuda.component.html',
  styleUrls: ['./pagina-con-ayuda.component.css']
})
export class PaginaConAyudaComponent implements OnInit {

  listProductos: Producto[] = [];
  listPaginas: Pagina[] = [];
  listPaginas2: Pagina[] = [];

  constructor(private _productoService: ProductoService,
    private _plantillaService: PaginaService,
    private empresaServicio: empresaService
    , private toastr: ToastrService,
    private router: Router) {

  }

  editForm = {
    idEmpresa: window.localStorage.getItem('empresa'),
    estilo1: "1",
    estilo2: "2",
    estilo3: "3"
  }

  editForm2 = {
    idEmpresa: window.localStorage.getItem('empresa'),
    estilo1: "4",
    estilo2: "5",
    estilo3: "6"
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerPlantillas();
  }

  cerrarSesion() {
    console.log('dio click en cerrar sesion')
    window.localStorage.removeItem('empresa')
    window.localStorage.removeItem('usuario')
    window.localStorage.removeItem('usuarioAdmin')
    window.localStorage.removeItem('carrito')
    this.toastr.success('Cierre de sesión exitoso')
    this.router.navigate(['/'])
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  obtenerPlantillas() {
    this._plantillaService.obtenerPagina("1").subscribe(data => {
      console.log(data);
      this.listPaginas.push(data);
    }, error => {
      console.log(error);
    })
    this._plantillaService.obtenerPagina("6").subscribe(data => {
      console.log(data);
      this.listPaginas2.push(data);
    }, error => {
      console.log(error);
    })
  }

  actualizarEstilos(op: any) {
    if (op == "0") {
      this.empresaServicio.editEstilos(this.editForm).subscribe((res) => {
        console.log(res)
        console.log(this.editForm)
        this.toastr.success('Estilo asignado con exito')
      })
    } else if (op == "1") {
      this.empresaServicio.editEstilos(this.editForm2).subscribe((res) => {
        console.log(res)
        this.toastr.success('Estilo asignado con exito')
      })
    }
  }
}

