import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-detalles-empresa',
  templateUrl: './admin-detalles-empresa.component.html',
  styleUrls: ['./admin-detalles-empresa.component.css']
})
export class AdminDetallesEmpresaComponent implements OnInit {
  datosEmpresa = {
    'nombre': 'Empresa 1',
    'id': 20011,
    'email': 'empresa1q@gmail.com',
    'estado': 'Activo',
    'direccion': 'Dirección 1'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
