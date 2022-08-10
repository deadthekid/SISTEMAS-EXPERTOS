import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    activo: Boolean,
    descripcion: '',
    logo:''
  };

  constructor(
    private route: ActivatedRoute,
    private empresaService: empresaService,
    private toastr: ToastrService,
    private router: Router
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

  bloquearEmpresa(){
    if(this.datosEmpresa.activo!){
      this.empresaService.bloquearEmpresa({'id':this.idEmpresa}).subscribe(data=>{
        if(data.acceso){
          console.log(data.mensaje);
          this.toastr.success('Empresa bloqueada exitosamente');
          this.getEmpresa();
        }else{
          console.log(data.mensaje);
        }
      }, error=>{
        console.log(error);
      });
    }else{
      this.toastr.error('La empresa ya se encuentra bloqueada');
    }
  }

  eliminarEmpresa(){
    this.empresaService.delEmpresa(this.idEmpresa).subscribe(data=>{
      if(data.acceso){
        console.log(data.mensaje);
        this.toastr.success('Empresa eliminada exitosamente');
        this.router.navigate(['/admin/empresas']);
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
