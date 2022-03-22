import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from "../../../Services/worker.service";

@Component({
  selector: 'app-form-empleados',
  templateUrl: './form-empleados.component.html',
  styleUrls: ['./form-empleados.component.css']
})
export class FormEmpleadosComponent implements OnInit {

  empleado = {
    nombre: '',
    email: '',
    contrasena: '',
    edad: '',
    cargo: '',
    tipoUsuario: ''
  }

  constructor(public router: Router, public workerS: WorkerService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('_id')
    localStorage.removeItem('email')
    localStorage.removeItem('jwt')
    this.router.navigate(['/'])
  }

  login_Component(data:any){
    if(data.valid){
      console.log(this.empleado);
      this.workerS.postWorker(this.empleado).subscribe((res)=>{
        console.log(res);
        
      }, err=>{
        console.log(err);
        
      })      
    }else{
      console.log('Ta mal');
      
    }
    
  }

}
