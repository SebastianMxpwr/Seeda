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

  getTaskId(id){
    return this.http.get(`${this.url}/obter_tarea/${id}`)
  }

  completeTask(id, body){
    return this.http.put(`${this.url}/completar_tarea/${id}`, body)
  }

  addTask(body){
    return this.http.post(`${this.url}/registrar_tarea`, body)
  }

  getAllTask(){
    return this.http.get(`${this.url}/obter_tareas`)
  }

  editTask(id, body){
    return this.http.put(`${this.url}/editar_tarea/${id}`, body)
  }

  deleteTask(id){
    return this.http.delete(`${this.url}/eliminar_tarea/${id}`)
  }
}
