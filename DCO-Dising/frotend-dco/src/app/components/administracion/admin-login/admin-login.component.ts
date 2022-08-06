import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  formLogin =  new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    contrasena: new FormControl('', [Validators.required])
  })

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private adminService : AdminService
  ) { }

  ngOnInit(): void {
  }

  login(){
    let login = this.formLogin.value;
    this.adminService.login(login).subscribe(data => {
      if(data){
        console.log(data);
        this.toastr.success('Ingreso de forma exitosa', 'Bienvenido ' +data.nombre);
        this.router.navigate(['/admin/home']);
      }else{
        this.toastr.error('Datos incorrectos', 'Correo o contraseña no validos');
      }
    }, error =>{
      console.log(error);
    });
  }

}
