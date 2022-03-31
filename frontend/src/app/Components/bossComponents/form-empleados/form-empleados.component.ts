import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from "../../../Services/worker.service";

declare var iziToast: any


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
    sueldo: 0,
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
      
      this.workerS.postWorker(this.empleado).subscribe((res:any)=>{
        console.log(res.res.nombre);
        
        iziToast.success({
          title: 'Exito registrar',
          message: `Se registro correctamente`,
          position: 'bottomLeft'
        });
        
      }, err=>{
        iziToast.error({
          title: 'Error',
          message: err.error.msg,
        });
      })      
    }else{
      iziToast.error({
        title: 'Error',
        message: 'Datos no validos',
      });;
      
    }
    
  }

}
