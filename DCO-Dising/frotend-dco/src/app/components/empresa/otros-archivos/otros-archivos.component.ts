import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otros-archivos',
  templateUrl: './otros-archivos.component.html',
  styleUrls: ['./otros-archivos.component.css']
})
export class OtrosArchivosComponent implements OnInit {
  
  public otrosArchivos:any
  public page!:number
  constructor() { }

  ngOnInit(): void {
  }

}
