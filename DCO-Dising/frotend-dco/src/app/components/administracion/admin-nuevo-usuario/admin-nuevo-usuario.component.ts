import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-nuevo-usuario',
  templateUrl: './admin-nuevo-usuario.component.html',
  styleUrls: ['./admin-nuevo-usuario.component.css']
})
export class AdminNuevoUsuarioComponent implements OnInit {

  formularioUsuario = new FormGroup({
    nombre: new FormControl(''),
    id: new FormControl(''),
    pass: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private router: Router, private toastr: ToastrService, private adminServicio: AdminService) { }

  ngOnInit(): void {
    this.seguridad()
  }

  seguridad() {
    if (!window.localStorage.getItem('usuarioAdmin')) {
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina')
    } else {
      this.adminServicio.seguridad(window.localStorage.getItem('usuarioAdmin')!).subscribe((res) => {
        if (res.name != "CastError") {
          if (res == false) {
            this.router.navigate(['/'])
            this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina')
          }
        } else {
          this.router.navigate(['/'])
          this.toastr.error('Necesita ingresar con una cuenta verificada para ingresar a esa pagina')
        }

      })
    }
  }

}
