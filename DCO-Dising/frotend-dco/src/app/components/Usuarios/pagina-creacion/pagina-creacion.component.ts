
import { Component, OnInit, PipeTransform, Pipe} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pagina } from 'src/app/models/pagina';
import { PaginaService } from 'src/app/services/pagina.service';



@Component({
  selector: 'app-pagina-creacion',
  templateUrl: './pagina-creacion.component.html',
  styleUrls: ['./pagina-creacion.component.css']
})



export class PaginaCreacionComponent implements OnInit  {paginaForm: FormGroup;
  html: string=""
  css:  string=""
  javascript: string=""
  empresaId: number=0;
  htmlStr=""
  cssStr=""

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _paginaService: PaginaService,
    private sanatizer:DomSanitizer) {
    this.paginaForm = this.fb.group({
      html:['',Validators.required],
      css:['',[Validators.required]],
      javascript:['',Validators.required],
      empresaId:['',Validators.required],
     
    })
  }

  ngOnInit(): void {
   
  }
  
  agregarPagina(){
    const PAGINA: Pagina={
      html: this.paginaForm.get('html')?.value,
      css: this.paginaForm.get('css')?.value,
      javascript: this.paginaForm.get('javascript')?.value,
      empresaId: this.paginaForm.get('empresaId')?.value
    }

    
    console.log(PAGINA);
    this._paginaService.guardarPagina(PAGINA).subscribe(data=>{
      this.toastr.success('El usuario fue registrado con exito', 'Usuario Registrado');
      this.router.navigate(['/paginas/ver'])
    }, error=>{
      console.log(error);
      this.paginaForm.reset();
    })
    

    
  }

  renderizarPagina() {
    let id="62f691e65116e89d0e67dc41"
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



