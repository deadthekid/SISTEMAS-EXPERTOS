import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creacion-usuario',
  templateUrl: './creacion-usuario.component.html',
  styleUrls: ['./creacion-usuario.component.css']
})
export class CreacionUsuarioComponent implements OnInit {
  usuarioForm:FormGroup;

  constructor(private fb: FormBuilder,
              private router:Router,
              private toastr: ToastrService) {
    this.usuarioForm = this.fb.group({
      nombre:['',Validators.required],
      email:['',Validators.required],
      contraseña:['',Validators.required],
      tipoUsuario:['',Validators.required],
      terminos:['',Validators.required]

    })
   }
    
  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.usuarioForm);
    this.toastr.success('El usuario fue registrado con exito', 'Usuario Registrado');
    this.router.navigate(['/usuarios'])
  }

}
