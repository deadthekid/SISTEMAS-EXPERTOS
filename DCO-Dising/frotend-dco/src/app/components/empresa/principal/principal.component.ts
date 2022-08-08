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

  constructor(private router: Router, private toastr: ToastrService, private empresaServicio: empresaService) { }
  logo!: string

  ngOnInit(): void {
    this.seguridad()
    this.logoEmpresa()
  }
  seguridad() {
    if (!window.localStorage.getItem('empresa')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina')
    } else {
      this.empresaServicio.seguridad(window.localStorage.getItem('empresa')!).subscribe((res) => {
        if (res == null) {
          this.router.navigate(['/'])
          this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina','ERROR')
          window.localStorage.removeItem('empresa')
        }
      })
    }
  }
  cerrarSesion() {
    console.log('dio click en cerrar sesion')
    window.localStorage.removeItem('empresa')
    this.toastr.success('Cierre de sesión exitoso')
    this.router.navigate(['/empresa/login'])
  }
  logoEmpresa() {
    this.empresaServicio.logo(window.localStorage.getItem('empresa')!).subscribe((res) => {
      this.logo = res[0].logo
    })
  }

}
