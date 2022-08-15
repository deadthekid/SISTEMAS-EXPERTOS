import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Plantilla } from 'src/app/models/plantilla.model';

@Component({
  selector: 'app-admin-nuevo-tema',
  templateUrl: './admin-nuevo-tema.component.html',
  styleUrls: ['./admin-nuevo-tema.component.css']
})
export class AdminNuevoTemaComponent implements OnInit {

  formularioPlantilla = new FormGroup({
    nombre: new FormControl(''),
    html: new FormControl(''),
    css: new FormControl(''),
    javascript: new FormControl('')
  });

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminServicio: AdminService) { }

  ngOnInit(): void {
    this.seguridad()
  }

  registrarPlantilla(){
    const PLANTILLA = {
      nombre : this.formularioPlantilla.value.nombre,
      html : this.formularioPlantilla.value.html,
      css : this.formularioPlantilla.value.css,
      javascript : this.formularioPlantilla.value.javascript
    }
    //console.log(PLANTILLA);
    this.adminServicio.nuevaPlantilla(PLANTILLA).subscribe(data=>{
      console.log(data.mensaje);
      this.toastr.success('La plantilla fue registrada con exito', 'Plantilla Registrada');
      this.router.navigate(['admin/temas'])
    }, error=>{
      console.log(error);
      this.formularioPlantilla.reset();
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
