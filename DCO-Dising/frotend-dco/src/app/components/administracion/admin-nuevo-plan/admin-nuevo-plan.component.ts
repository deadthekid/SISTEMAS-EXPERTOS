import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-nuevo-plan',
  templateUrl: './admin-nuevo-plan.component.html',
  styleUrls: ['./admin-nuevo-plan.component.css']
})
export class AdminNuevoPlanComponent implements OnInit {

  formularioPlan = new FormGroup({
    nombre: new FormControl(''),
    id: new FormControl(''),
    desc: new FormControl('')
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
