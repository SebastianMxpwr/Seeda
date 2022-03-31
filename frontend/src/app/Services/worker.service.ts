import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  url: string = 'http://127.0.0.1:3000/api'
  constructor(public http: HttpClient) { }

  getAllWorkers(){
    return this.http.get(`${this.url}/empleados`)
  }

  postWorker(body){
    return this.http.post(`${this.url}/registro_empleado`, body)
  }

  getWorkerId(id: string){
    return this.http.get(`${this.url}/empleado/${id}`)
  }

  putWorkerId(body, id){
    return this.http.put(`${this.url}/editar_empleado/${id}`, body)
  }

  deleteWorkerId(id){
    return this.http.delete(`${this.url}/borrar_empleado/${id}`)
  }


}
