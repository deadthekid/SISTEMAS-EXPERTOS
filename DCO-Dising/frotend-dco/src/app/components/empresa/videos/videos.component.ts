import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videos:any
  public page!:number
  constructor(private router: Router,private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.seguridad()
  }
  seguridad(){
    if(!window.localStorage.getItem('usuario')){
      this.router.navigate(['/'])
      this.toastr.error('Necesita ingresar con una cuenta para ingresar a esa pagina')
    }
  }

}
