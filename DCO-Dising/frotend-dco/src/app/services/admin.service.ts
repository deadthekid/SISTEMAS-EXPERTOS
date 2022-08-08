import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = 'http://localhost:4000/admin';

  constructor(
    private http: HttpClient
  ) { }

  login(infoLogin: object): Observable<any>{
    return this.http.post(this.url+"/login",infoLogin)
  }

  getPlanes(): Observable<any>{
    return this.http.get(this.url+"/planes")
  }

}
