import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-detalles-usuario',
  templateUrl: './admin-detalles-usuario.component.html',
  styleUrls: ['./admin-detalles-usuario.component.css']
})
export class AdminDetallesUsuarioComponent implements OnInit {

  idUsuario = "";

  datosUsuario = {
    'nombre': '',
    '_id':'',
    'correo': '',
    'contrasenia': '',
    'tipoUsuario':''
  };
  
  constructor(
    private route : ActivatedRoute,
    private usuarioService : UsuarioService,
    private router: Router, 
    private toastr: ToastrService, 
    private adminServicio: AdminService
  ) { }

  ngOnInit(): void {
    this.seguridad()
    this.getUsuario();
  }


  getUsuario(){
    this.idUsuario = this.route.snapshot.paramMap.get('id')!;
    this.usuarioService.obtenerUsuario(this.idUsuario).subscribe(data=>{
      if(data.acceso){
        console.log(data.mensaje);
        this.datosUsuario = data.usuario;
        //console.log(this.datosUsuario);
      }else{
        console.log(data.mensaje);
      }
    }, error =>{
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