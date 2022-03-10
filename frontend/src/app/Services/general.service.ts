import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  url: string = 'http://127.0.0.1:3000/api'

  constructor(public http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.url}/login_empleado`, data)
  }
}
