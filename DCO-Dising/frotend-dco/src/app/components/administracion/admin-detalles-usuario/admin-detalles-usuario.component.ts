import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-admin-detalles-usuario',
  templateUrl: './admin-detalles-usuario.component.html',
  styleUrls: ['./admin-detalles-usuario.component.css']
})
export class AdminDetallesUsuarioComponent implements OnInit {

  datosUsuarioNuevo = new FormGroup({
    correo: new FormControl(''),
    contrasenia: new FormControl(''),
    nombre: new FormControl('')
  });

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
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
    this.getUsuario();
  }


  getUsuario(){
    this.idUsuario = this.route.snapshot.paramMap.get('id')!;
    this.usuarioService.obtenerUsuario(this.idUsuario).subscribe(data=>{
      if(data.acceso){
        console.log(data.mensaje);
        this.datosUsuario = data.usuario;
        this.datosUsuarioNuevo.get('nombre')?.setValue(data.usuario.nombre);
        this.datosUsuarioNuevo.get('correo')?.setValue(data.usuario.correo);
        this.datosUsuarioNuevo.get('contrasenia')?.setValue(data.usuario.contrasenia);
        //console.log(this.datosUsuario);
      }else{
        console.log(data.mensaje);
      }
    }, error =>{
      console.log(error);
    });
    
  }

  editarUsuario(){
    let usuario = {
      id: this.idUsuario,
      nombre: this.datosUsuarioNuevo.value.nombre,
      correo: this.datosUsuarioNuevo.value.correo,
      contrasenia: this.datosUsuarioNuevo.value.contrasenia
    }

    this.usuarioService.actualizarUsuario(usuario).subscribe(data=>{
      if(data.acceso){
        this.toastr.success(data.mensaje);
        this.getUsuario();
      }else{
        this.toastr.error(data.mensaje);
      }
    }, error =>{
      console.log(error);
    });
  }

}