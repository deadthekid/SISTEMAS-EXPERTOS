import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

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
    private usuarioService : UsuarioService
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
        //console.log(this.datosUsuario);
      }else{
        console.log(data.mensaje);
      }
    }, error =>{
      console.log(error);
    });
    
  }

}