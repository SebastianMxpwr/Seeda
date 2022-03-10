import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url: string = 'http://127.0.0.1:3000/api'


  constructor(public http: HttpClient) { }

  getProjectWorker(id){
    return this.http.get(`${this.url}/obtener_proyectos_usuario/${id}`)
  }
}
