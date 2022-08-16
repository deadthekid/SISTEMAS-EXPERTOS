import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Carrito } from 'src/app/models/interfaz-carrito';
import { ToastrService } from 'ngx-toastr';
import { PaginaService } from 'src/app/services/pagina.service';
import { empresaService } from 'src/app/services/empresa.service';
@Component({
  selector: 'app-pagina-ver-creacion-dos',
  templateUrl: './pagina-ver-creacion-dos.component.html',
  styleUrls: ['./pagina-ver-creacion-dos.component.css']
})
export class PaginaVerCreacionDosComponent implements OnInit {paginaForm: FormGroup;
  htmlStr=""
  cssStr=""
  html: string=""
  css:  string=""
  javascript: string=""
  empresaId: number=0;
  id:string | null;
  productoForm:FormGroup;
  nombre:string="";
  precio:number=0;
  img:string="";
  vendedor:string="";
  descripcion:string="";
  listProductos: Producto[] = [];
  e1="";

  carrito:Carrito[] = [];
  constructor(private aRoute:ActivatedRoute,
            private _productoService: ProductoService,
            private _empresaService: empresaService,
            private toastr: ToastrService,
            private fb:FormBuilder,
            private _paginaService: PaginaService) {

    this.productoForm = this.fb.group({
      nombre: ['',Validators.required],
      precio: ['',Validators.required],
      img: ['',Validators.required]
    })    

    this.paginaForm = this.fb.group({
      html:['',Validators.required],
      css:['',[Validators.required]],
      javascript:['',Validators.required],
      empresaId:['',Validators.required],
     
    })

    this.id=this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerProducto();
    this.obtenerPagina();
  }

  obtenerProducto(){
    if(this.id!==null){
      this._productoService.buscarProducto(this.id).subscribe(data=>{
        this.id = data._id;
       this.nombre =data.nombre;
       this.img= data.img;
       this.precio = data.precio;
       this.descripcion = data.descripcion;
       this.vendedor = data.vendedor;
      })
    }
  }

  carritoCompras(){
    if(this.id!==null){
      this._productoService.buscarProducto(this.id).subscribe(data=>{
        if(window.localStorage.getItem('carrito')==null){
          let productoAux= {
            idProducto: data._id,
            nombre:data.nombre,
            precio:data.precio,
            img:data.img,
            des:data.descripcion
          }
          this.carrito.push(productoAux);
          this.toastr.success('Se agrego al carrito')
          window.localStorage.setItem('carrito',JSON.stringify(this.carrito));
        }else{
          this.carrito= JSON.parse(window.localStorage.getItem('carrito')|| '{}')
          let comprobante=false;
          this.carrito.forEach(e =>{
            if(e.idProducto==data._id){
              comprobante=true;
              this.toastr.warning('Ya existe en su carrito')
            }
          })
          if(comprobante==false){
            let productoAux2= {
              idProducto: data._id,
              nombre:data.nombre,
              precio:data.precio,
              img:data.img,
              des:data.descripcion
            }
            this.carrito.push(productoAux2);
            window.localStorage.setItem('carrito',JSON.stringify(this.carrito));
            this.toastr.success('Se agrego al carrito')
          }
        }
      })
    }
    
  }

  obtenerPagina(){
    this._empresaService.getEmpresa(window.localStorage.getItem('empresa')|| '{}').subscribe(data => {
      if (data) {
        console.log(data)
      this.e1 =data.empresa.estilo2;
      console.log(this.e1)
      this.renderizarPagina();
      }else{
        this.toastr.error('Datos incorrectos', 'error');
      }
    }, error => {
      console.log(error);
      this.paginaForm.reset();
      this.toastr.error('Algo salio mal en el login')
    })
  }
   
  renderizarPagina() {
    
    

    this. _paginaService.obtenerPagina(this.e1).subscribe(data => {
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
