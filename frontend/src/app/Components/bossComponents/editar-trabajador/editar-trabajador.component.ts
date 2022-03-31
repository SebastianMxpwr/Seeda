import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from 'src/app/Services/worker.service';
declare var iziToast: any


@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent implements OnInit {

  id: string
  worker = {
    blnActivo: true,
    cargo: '',
    contrasena: '',
    createdAt: '',
    edad: '',
    email: '',
    nombre: '',
    sueldo: 0,
    tipoUsuario: '',
    updatedAt: '',
    __v: 0,
    _id: ''
  }
  constructor(private aRouter: ActivatedRoute, public workerS: WorkerService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpleadoId()
  }

  obtenerEmpleadoId(){
    this.aRouter.params.subscribe(params=>{
      this.id = params['id']
      this.workerS.getWorkerId(this.id).subscribe((res:any)=>{
        console.log(res);
        
        this.worker = res.cont
        console.log(this.worker.cargo);
        
      },err=>{
        console.log(err);
        
      })
    })
  }

  actualizarEmpleado(data:any){
    if(data.valid){
     this.workerS.putWorkerId(this.worker, this.id).subscribe((res:any)=>{
      this.router.navigate(['/boss/trabajadores'])
      iziToast.success({
        title: 'Actualizado',
        message: 'Trabajador Actualizado',
    });
     },err=>{
      iziToast.error({
            title: 'Error',
            message: err.error.message,
        });; 
     })
      
    }
  }

  
}
