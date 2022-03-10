import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url: string = 'http://127.0.0.1:3000/api'

  constructor(public http: HttpClient) { }

  getTaskForUser(){
    return this.http.get(`${this.url}/obter_tarea_usuario/${localStorage.getItem('_id')}`)
  }

  completeTaskC(id, body){
    return this.http.put(`${this.url}/completar_tarea/${id}`, body)
  }
}
