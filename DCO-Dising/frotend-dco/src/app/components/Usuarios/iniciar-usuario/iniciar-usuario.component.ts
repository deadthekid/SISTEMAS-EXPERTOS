import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-iniciar-usuario',
  templateUrl: './iniciar-usuario.component.html',
  styleUrls: ['./iniciar-usuario.component.css']
})
export class IniciarUsuarioComponent implements OnInit {

  usuarioForm:FormGroup;

  constructor(private fb: FormBuilder,
              private router:Router,
              private toastr: ToastrService) {
    this.usuarioForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      contraseña:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuarioForm);
    this.toastr.success('Inicio de sesión exitoso', 'Inicio de Sesión');
    this.router.navigate(['/usuarios'])
  }
}
