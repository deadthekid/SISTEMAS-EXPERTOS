import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  listaUsuarios = [
    {
      _id:"",
      nombre:"",
      tipoUsuario:""
    }
  ];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }


  getUsuarios(){
    this.usuarioService.listaUsuarios().subscribe(data=>{
    if(data.acceso){
      console.log(data.mensaje);
      this.listaUsuarios = data.listaUsuarios;
      //console.log(this.listaUsuarios);
    }else{
      console.log(data.mensaje);
    }
    }, error =>{
      console.log(error);
    });
  }

}
