import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from 'src/app/Services/worker.service';
declare var iziToast: any


@Component({
  selector: 'app-mostrar-empleados',
  templateUrl: './mostrar-empleados.component.html',
  styleUrls: ['./mostrar-empleados.component.css']
})
export class MostrarEmpleadosComponent implements OnInit {

  workers = []
  constructor(public workerS: WorkerService, public router: Router) { }

  ngOnInit(): void {
    this.MostrarEmpleadosC()
  }

  MostrarEmpleadosC(){
    this.workerS.getAllWorkers().subscribe((res:any) => {
      this.workers = res.cont
      console.log(res);
      
    }, err=>{
      console.log(err);
      
    })
  }


  selecionarEmpleado(id:string){
    this.router.navigate(['/boss/trabajadores/editar', id])
  }

  borrarEmpleado(id:string){
    iziToast.question({
      timeout: 20000,
      close: false,
      overlay: true,
      backgroundColor: 'rgb(240, 86, 86)',
      displayMode: 'once',
      id: 'question',
      zindex: 999,
      title: 'Oye!!',
      message: 'Estas seguro de borrarlo',
      position: 'center',
      buttons: [
          ['<button><b>SI</b></button>',  (instance, toast) => {
   
            this.workerS.deleteWorkerId(id).subscribe((res:any) => {
              this.MostrarEmpleadosC()
              iziToast.success({
                title: 'OK',
                message: 'Exito al borrar al usuario',
            });
              
            },err=>{
              console.log(err);
              
            })
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
   
          }, true],
          ['<button><b>NO</b></button>', (instance, toast)=> {
   
              instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
   
          }],
      ],
  });

  }

}
