import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData) {
    let urlAPI = 'http://localhost:8888/empresa/subirArchivo';
    return this.http.post(urlAPI, formData);
  }
}