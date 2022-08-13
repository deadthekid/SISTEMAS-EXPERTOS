import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Plan } from 'src/app/models/plan.model';
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
    desc: new FormControl(''),
    maxP: new FormControl(0),
    maxA: new FormControl(0),
    comision: new FormControl(0),
    ePersonalizados: new FormControl(false)
  });

constructor(
    private router : Router,
    private adminServicio : AdminService,
    private toastr : ToastrService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.seguridad()
  }

  nuevoPlan(){
    const PLAN : Plan = {
      nombre : this.formularioPlan.value.nombre!,
      descripcion : this.formularioPlan.value.desc!,
      maxArchivos : this.formularioPlan.value.maxA!,
      maxPaginas : this.formularioPlan.value.maxP!,
      ePersonalizados : this.formularioPlan.value.ePersonalizados!,
      comision : this.formularioPlan.value.comision!
    }
    //console.log(PLAN);
    this.adminServicio.nuevoPlan(PLAN).subscribe(data=>{
      console.log(data.mensaje);
      this.toastr.success('El plan fue registrado con exito', 'Plan Registrado');
      this.router.navigate(['admin/planes'])
    }, error=>{
      console.log(error);
      this.formularioPlan.reset();
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
