import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-detalles-tema',
  templateUrl: './admin-detalles-tema.component.html',
  styleUrls: ['./admin-detalles-tema.component.css']
})
export class AdminDetallesTemaComponent implements OnInit {

  idPlantilla = '';

  datosPlantilla = {
    _id : '',
    nombre : '',
    html : '',
    css : '',
    javascript : ''
  }

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminServicio: AdminService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.seguridad();
    this.getPlantilla();
  }

  getPlantilla(){
    this.idPlantilla = this.route.snapshot.paramMap.get('id')!;
    this.adminServicio.obtenerPlantilla(this.idPlantilla).subscribe(data => {
      if(data.acceso){
        console.log(data.mensaje);
        this.datosPlantilla = data.plantilla;
        //console.log(this.datosPlan);
      }else{
        console.log(data.mensaje);
      }
    }, error => {
      console.log(error);
    })
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
