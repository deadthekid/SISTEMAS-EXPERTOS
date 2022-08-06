import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empresaService } from 'src/app/services/empresa.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private router: Router,private toastr: ToastrService, private empresaServicio: empresaService) { }
  logo!:string

  ngOnInit(): void {
    this.seguridad()
    this.logoEmpresa()
  }
  seguridad(){
    if(!window.localStorage.getItem('usuario')){
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta para ingresar a esa pagina')
    }else{
    }
  }
  logoEmpresa(){
    this.empresaServicio.logo(window.localStorage.getItem('usuario')!).subscribe((res)=>{
      this.logo=res[0].logo
    })
  }
  
}
