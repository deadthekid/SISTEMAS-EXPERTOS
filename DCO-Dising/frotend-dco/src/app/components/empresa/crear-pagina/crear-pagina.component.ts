import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-crear-pagina',
  templateUrl: './crear-pagina.component.html',
  styleUrls: ['./crear-pagina.component.css']
})
export class CrearPaginaComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private empresaServicio: empresaService) { }

  verificarAyuda!: boolean
  ngOnInit(): void {
    this.seguridad()
  }
  seguridad() {
    let valido = true
    if (!window.localStorage.getItem('empresa')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina')
      valido = false
    } else {
      this.empresaServicio.seguridad(window.localStorage.getItem('empresa')!).subscribe((res) => {
        if (res == null) {
          this.router.navigate(['/'])
          this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina', 'ERROR')
          window.localStorage.removeItem('empresa')
          valido = false
        }
      })
    }
    return valido
  }
  cerrarSesion() {
    console.log('dio click en cerrar sesion')
    window.localStorage.removeItem('empresa')
    this.toastr.success('Cierre de sesión exitoso')
    this.router.navigate(['/empresa/login'])
  }


  sinAyuda() {
    console.log('sin ayuda')
    this.verificarAyuda = false
  }
  conAyuda() {
    console.log('con ayuda')
    this.verificarAyuda = true
  }
}


