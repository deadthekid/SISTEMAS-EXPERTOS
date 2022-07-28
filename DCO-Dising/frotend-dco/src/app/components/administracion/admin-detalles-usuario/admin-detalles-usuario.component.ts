import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-detalles-usuario',
  templateUrl: './admin-detalles-usuario.component.html',
  styleUrls: ['./admin-detalles-usuario.component.css']
})
export class AdminDetallesUsuarioComponent implements OnInit {

  datosUsuario = {
    'nombre': 'Usuario 1',
    'id': 10011,
    'email': 'usuario1q@gmail.com',
    'pass': '**********'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
