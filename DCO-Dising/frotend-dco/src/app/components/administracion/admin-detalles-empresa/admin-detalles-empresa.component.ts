import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-admin-detalles-empresa',
  templateUrl: './admin-detalles-empresa.component.html',
  styleUrls: ['./admin-detalles-empresa.component.css']
})
export class AdminDetallesEmpresaComponent implements OnInit {

  idEmpresa = "";

  datosEmpresa = {
    nombre: '',
    _id:'',
    correo: '',
    estado: 'Activo',
    descripcion: '',
    logo:''
  };

  constructor(
    private route: ActivatedRoute,
    private empresaService: empresaService
  ) { }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa(){
    this.idEmpresa = this.route.snapshot.paramMap.get('id')!;
    this.empresaService.getEmpresa(this.idEmpresa).subscribe(data=>{
      if(data.acceso){
        console.log(data.mensaje);
        this.datosEmpresa = data.empresa;
        this.logoEmpresa();
      }else{
        console.log(data.mensaje);
      }
    }, error=>{
      console.log(error);
    });
  }

  logoEmpresa(){
    this.empresaService.logo(this.datosEmpresa._id).subscribe((res)=>{
      this.datosEmpresa.logo=res[0].logo
    })
  }

}
