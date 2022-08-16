import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { empresaService } from 'src/app/services/empresa.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Carrito } from 'src/app/models/interfaz-carrito';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-galeria-productos',
  templateUrl: './galeria-productos.component.html',
  styleUrls: ['./galeria-productos.component.css']
})
export class GaleriaProductosComponent implements OnInit {

  constructor(private empresaServicio: empresaService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute,private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.getIdEmpresa()
    this.obtenerProductos();
  }
  logeado!:boolean
  logged(){
    if(window.localStorage.getItem('usuario')){
      this.logeado=true
    }else{
      this.logeado=false
    }
  }

  idEmpresa!: string
  getIdEmpresa() {
    this.idEmpresa = this.route.snapshot.paramMap.get('idEmpresa')!;
    console.log(this.idEmpresa)
  }

  listProductos: Producto[] = [];
  obtenerProductos() {

    this.empresaServicio.getProductos(this.idEmpresa!).subscribe(res => {
      console.log(res);
      this.listProductos = res;

      if (this.listProductos.length == 0) {
        this.toastr.error('No hay ningun producto en la lista', 'AVISO')
      }
    }, error => {
      console.log(error);
    })
  }
  cerrarSesion() {

    this.toastr.success('Cierre de sesión exitoso')
    window.localStorage.removeItem('empresa')
    this.router.navigate(['/empresa/login'])

  }
  carrito2: Carrito[] = [];
  mostrarCarrito() {
    if (window.localStorage.getItem('carrito') == null) {
      this.toastr.warning('Aun no agregado ningun producto a su carrito :(')
    } else {
      this.carrito2 = JSON.parse(window.localStorage.getItem('carrito') || '{}')
      if (this.carrito2.length == 0) {
        this.toastr.warning('Aun no agregado ningun producto a su carrito :(')
        console.log(this.carrito2.length)
      } else {
        this.carrito2 = JSON.parse(window.localStorage.getItem('carrito') || '{}')
        this.toastr.success('Productos cargados con Exito :)')
      }

    }
  }
  obtenerProductosCarrito() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProductoCarrito(id: any) {
    this.carrito2 = JSON.parse(window.localStorage.getItem('carrito') || '{}')
    let eliminarAux = id - 1;
    this.carrito2.splice(eliminarAux, 1);
    console.log(id);
    window.localStorage.setItem('carrito', JSON.stringify(this.carrito2));
    console.log(this.carrito2)
    this.toastr.warning('Se elimino de su carrito el producto con exito')

  }
}