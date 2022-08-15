import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { empresaService } from 'src/app/services/empresa.service';
@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  constructor(private router: Router,
    private toastr: ToastrService,
    private empresaServicio: empresaService
    ) { }

  ngOnInit(): void {
    this.logeado()
    this.getEmpresas()
    
  }
  usuario = window.localStorage.getItem('usuario')
  empresa = window.localStorage.getItem('empresa')


  logged!: boolean
  logeado() {
    if (window.localStorage.getItem('empresa') || window.localStorage.getItem('usuario')) {
      this.logged = true
    } else {
      this.logged = false
    }
  }

  cerrarSesion() {
    this.toastr.success('Cierre de sesión exitoso')
    window.localStorage.removeItem('empresa')
    window.localStorage.removeItem('usuario')
    this.router.navigate(['/'])
    this.logeado()
  }

  listaEmpresas:any
  getEmpresas(){
    this.empresaServicio.getEmpresas().subscribe((res)=>{
      this.listaEmpresas=res.listaEmpresas
      let temporal=new Array
      res.listaEmpresas.forEach((element:any) => {
        if(element.activo){
          temporal.push(element)
        }
      });
      this.listaEmpresas=temporal
      console.log(this.listaEmpresas)
    })
  }

}
