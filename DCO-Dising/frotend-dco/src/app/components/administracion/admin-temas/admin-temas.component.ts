import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-temas',
  templateUrl: './admin-temas.component.html',
  styleUrls: ['./admin-temas.component.css']
})
export class AdminTemasComponent implements OnInit {

  listaPlantillas = [
    {
      nombre: '',
      _id: ''
    }
  ]

  constructor(private router: Router, private toastr: ToastrService, private adminServicio: AdminService) { }

  ngOnInit(): void {
    this.seguridad();
    this.obtenerPlantillas();
  }

  obtenerPlantillas(){
    this.adminServicio.getPlantillas().subscribe(data=>{
      if(data.acceso){
        console.log(data.mensaje);
        this.listaPlantillas = data.listaPlantillas;
      }
    }, error=>{
      console.log(error);
    });
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
