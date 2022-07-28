import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-nuevo-usuario',
  templateUrl: './admin-nuevo-usuario.component.html',
  styleUrls: ['./admin-nuevo-usuario.component.css']
})
export class AdminNuevoUsuarioComponent implements OnInit {

  formularioUsuario = new FormGroup({
    nombre: new FormControl(''),
    id: new FormControl(''),
    pass: new FormControl(''),
    email: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
