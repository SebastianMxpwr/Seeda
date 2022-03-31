import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';
declare var iziToast: any


@Component({
  selector: 'app-mostrar-tareas',
  templateUrl: './mostrar-tareas.component.html',
  styleUrls: ['./mostrar-tareas.component.css']
})
export class MostrarTareasComponent implements OnInit {

  tareas = []
  constructor(public tareaS: TaskService, public router: Router) { }

  ngOnInit(): void {
    this.getAllTaskC()
  }

  getAllTaskC(){
    this.tareaS.getAllTask().subscribe((res: any) => {
      this.tareas = res.cont
      console.log(this.tareas);
      
    },error=>{
      console.error(error);
    })
  }

  editTaskC(id: string){
    this.router.navigate(['/boss/tareas/editar/', id])
  }

  deleteTaskC(id: string){
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
   
            this.tareaS.deleteTask(id).subscribe((res:any)=>{
              this.getAllTaskC()
              iziToast.success({
                title: 'OK',
                message: 'Exito al borrar al usuario',
            });
            }, err=>{
              console.error(err);
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
