import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router,
    private toastr: ToastrService,
    private adminServicio: AdminService) { }

  ngOnInit(): void {
    this.logeado()
    this.getPlanes()
  }
  usuario = window.localStorage.getItem('usuario')
  empresa= window.localStorage.getItem('empresa')
  

  logged!:boolean
  logeado(){
    if(window.localStorage.getItem('empresa') || window.localStorage.getItem('usuario')){
      this.logged=true
    }else{
      this.logged=false
    }
  }
  
  cerrarSesion() {
    this.toastr.success('Cierre de sesión exitoso')
    window.localStorage.removeItem('empresa')
    window.localStorage.removeItem('usuario')
    this.router.navigate(['/'])
    this.logeado()
  }
  planes:any
  cantPlanes!:number
  getPlanes(){
    this.adminServicio.getPlanes().subscribe((res)=>{
      this.planes=res.listaPlanes
      this.cantPlanes=this.planes.length
      console.log(this.planes)
      console.log(this.cantPlanes)
    })
  }
}
