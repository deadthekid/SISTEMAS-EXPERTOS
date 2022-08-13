import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pagina } from 'src/app/models/pagina';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-pagina-ver-creacion',
  templateUrl: './pagina-ver-creacion.component.html',
  styleUrls: ['./pagina-ver-creacion.component.css']
})
export class PaginaVerCreacionComponent implements OnInit {paginaForm: FormGroup;
  html: string=""
  css:  string=""
  javascript: string=""
  empresaId: number=0;
  htmlStr=""
  cssStr=""
 
  listProductos:Producto[]=[];
  
  constructor(private _productoService: ProductoService,private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _paginaService: PaginaService,) {
    this.paginaForm = this.fb.group({
      html:['',Validators.required],
      css:['',[Validators.required]],
      javascript:['',Validators.required],
      empresaId:['',Validators.required],
     
    })
   }

  ngOnInit(): void {
    this.obtenerProductos();
    this.renderizarPagina();
   
    
    
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data=>{
      console.log(data);
      this.listProductos = data;
    },error=>{
      console.log(error);
    })
  }

  renderizarPagina() {
    let id="62f53e9d7c9354beb574fb3d"
    this. _paginaService.obtenerPagina(id).subscribe(data => {
      if (data) {
      this.html =data.html;
       this.css= data.css;
       this.javascript = data.javascript;
       this.empresaId = data.empresaId;
       this.htmlStr =data.html;
       this.cssStr =data.css;
       console.log(this.cssStr)

      }else{
        this.toastr.error('Datos incorrectos', 'error');
      }

    }, error => {
      console.log(error);
      this.paginaForm.reset();
      this.toastr.error('Algo salio mal en el login')
    })
  }

}
