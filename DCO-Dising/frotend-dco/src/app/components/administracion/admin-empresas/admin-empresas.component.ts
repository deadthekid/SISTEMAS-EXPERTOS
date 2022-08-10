import { Component, OnInit } from '@angular/core';
import { empresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-admin-empresas',
  templateUrl: './admin-empresas.component.html',
  styleUrls: ['./admin-empresas.component.css']
})
export class AdminEmpresasComponent implements OnInit {

  listaEmpresas = [
    {
      nombre:'',
      _id:'',
      plan:''
    }
  ]

  constructor(
    private empresaService : empresaService
  ) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(){
    this.empresaService.getEmpresas().subscribe(data=>{
      if(data.acceso){
        console.log(data.mensaje);
        this.listaEmpresas = data.listaEmpresas;
      }else{
        console.log(data.mensaje);
      }
    }, error=>{
      console.log(error);
    });
  }

}
