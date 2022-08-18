import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-editar-tema',
  templateUrl: './admin-editar-tema.component.html',
  styleUrls: ['./admin-editar-tema.component.css']
})
export class AdminEditarTemaComponent implements OnInit {

  idPlantilla = '';

  formularioPlantilla = new FormGroup({
    nombre: new FormControl(''),
    html: new FormControl(''),
    css: new FormControl(''),
    javascript: new FormControl('')
  });

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminServicio: AdminService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.seguridad();
    this.getPlantilla();
  }

  getPlantilla(){
    this.idPlantilla = this.route.snapshot.paramMap.get('id')!;
    this.adminServicio.obtenerPlantilla(this.idPlantilla).subscribe(data => {
      if(data.acceso){
        console.log(data.mensaje);
        this.formularioPlantilla.get('nombre')?.setValue(data.plantilla.nombre);
        this.formularioPlantilla.get('html')?.setValue(data.plantilla.html);
        this.formularioPlantilla.get('css')?.setValue(data.plantilla.css);
        this.formularioPlantilla.get('javascript')?.setValue(data.plantilla.javascript);
      }else{
        console.log(data.mensaje);
      }
    }, error => {
      console.log(error);
    })
  }

  editarPlantilla(){
    let plantilla = {
      id : this.idPlantilla,
      nombre : this.formularioPlantilla.value.nombre,
      html : this.formularioPlantilla.value.html,
      css : this.formularioPlantilla.value.css,
      javascript : this.formularioPlantilla.value.javascript
    }

    this.adminServicio.actualizarPlantilla(plantilla).subscribe( data => {
      if(data.acceso){
        this.toastr.success(data.mensaje);
        this.getPlantilla();
      }else{
        this.toastr.error(data.mensaje);
      }
    }, error => {
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
