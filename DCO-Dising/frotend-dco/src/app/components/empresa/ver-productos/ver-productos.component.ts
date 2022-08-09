import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { empresaService } from 'src/app/services/empresa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {

  constructor(private empresaServicio: empresaService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  listProductos: Producto[] = [];
  obtenerProductos() {
    this.empresaServicio.getProductos(window.localStorage.getItem('empresa')!).subscribe(res => {
      console.log(res);
      this.listProductos = res;
      
      if(this.listProductos.length==0){
        this.toastr.error('No hay ningun producto en la lista','AVISO')
      }
    }, error => {
      console.log(error);
    })
  }
}
