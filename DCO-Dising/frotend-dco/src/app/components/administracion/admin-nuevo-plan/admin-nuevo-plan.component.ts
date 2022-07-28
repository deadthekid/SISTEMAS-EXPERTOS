import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-nuevo-plan',
  templateUrl: './admin-nuevo-plan.component.html',
  styleUrls: ['./admin-nuevo-plan.component.css']
})
export class AdminNuevoPlanComponent implements OnInit {

  formularioPlan = new FormGroup({
    nombre: new FormControl(''),
    id: new FormControl(''),
    desc: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
