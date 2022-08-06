import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-planes',
  templateUrl: './admin-planes.component.html',
  styleUrls: ['./admin-planes.component.css']
})
export class AdminPlanesComponent implements OnInit {

  listaPlanes = [];

  constructor(
    private adminService : AdminService,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
    this.getPlanes();
  }

  getPlanes(){
    this.adminService.getPlanes().subscribe((data)=>{
      if(data){
        this.listaPlanes = data;
        console.log(this.listaPlanes);
      }else {
        console.log('error');
      }
    }, error => {
      console.log(error);
    });
  }

}
