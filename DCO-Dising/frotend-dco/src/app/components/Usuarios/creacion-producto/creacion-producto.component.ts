import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-creacion-producto',
  templateUrl: './creacion-producto.component.html',
  styleUrls: ['./creacion-producto.component.css']
})
export class CreacionProductoComponent implements OnInit {
  productoForm:FormGroup;
  uploadedFiles!: Array<File>;
  img!: string;
  constructor(private fb: FormBuilder,
    private router:Router,
    private toastr: ToastrService,
    private _productoService: ProductoService) { 
    this.productoForm = this.fb.group({
      nombre:['',Validators.required],
      precio:['',[Validators.required]],
      img:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario(element: any){
    const PRODUCTO: Producto={
      nombre: this.productoForm.get('nombre')?.value,
      precio: this.productoForm.get('precio')?.value,
      img: this.img
    }
    console.log(PRODUCTO);
    this._productoService.guardarProducto(PRODUCTO).subscribe(data=>{
      this.toastr.success('El producto fue registrado con exito', 'Producto Registrado');
      this.router.navigate(['/usuarios'])
    }, error=>{
      console.log(error);
      this.productoForm.reset();
    })
    
  }

  subir(element: any) {
    this.uploadedFiles = element.target.files;
    console.log(this.uploadedFiles)
    
    //previsualizacion de la imagen que se subira y creacion del b64 que se guardará para generar el logo o cualquier archivo que se quiera subir
    const reader = new FileReader()
    reader.onload = () => this.img = reader.result as string
    reader.readAsDataURL(this.uploadedFiles[0])
    console.log(this.img)
  }


}
