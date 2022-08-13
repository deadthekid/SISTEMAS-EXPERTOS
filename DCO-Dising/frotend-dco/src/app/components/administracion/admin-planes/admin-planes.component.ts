import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-planes',
  templateUrl: './admin-planes.component.html',
  styleUrls: ['./admin-planes.component.css']
})
export class AdminPlanesComponent implements OnInit {

  listaPlanes = [
    {
      nombre: '',
      descripcion: '',
      _id: ''
    }
  ]

  constructor(
    private adminService : AdminService
  ) { }

  ngOnInit(): void {
    this.obtenerPlanes();
  }

  obtenerPlanes(){
    this.adminService.getPlanes().subscribe(data=>{
      if(data.acceso){
        console.log(data.mensaje);
        this.listaPlanes = data.listaPlanes;
      }
    }, error=>{
      console.log(error);
    });
  }

}
