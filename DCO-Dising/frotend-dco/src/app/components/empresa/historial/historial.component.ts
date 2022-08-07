import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(private router: Router,private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.seguridad()
  }
  seguridad(){
    if(!window.localStorage.getItem('usuario')){
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta para ingresar a esa pagina')
    }
  }
  cerrarSesion(){
    console.log('dio click en cerrar sesion')
    window.localStorage.removeItem('usuario')
    this.toastr.success('Cierre de sesión exitoso')
    this.router.navigate(['/empresa/login'])
  }
}
