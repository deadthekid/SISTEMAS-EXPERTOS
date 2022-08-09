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
    descripcion: ''
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
      }else{
        console.log(data.mensaje);
      }
    }, error=>{
      console.log(error);
    });
  }

}
