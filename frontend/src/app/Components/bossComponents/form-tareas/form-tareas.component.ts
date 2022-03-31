import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from "../../../Services/worker.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TaskService } from 'src/app/Services/task.service';

declare var iziToast: any


@Component({
  selector: 'app-form-tareas',
  templateUrl: './form-tareas.component.html',
  styleUrls: ['./form-tareas.component.css']
})
export class FormTareasComponent implements OnInit {

  workers = []
  workerAsing = []
  tarea = {
    nombreTarea: '',
    descripcion: '',
    asignacion: ''
  }

  constructor(public router: Router, public workerS: WorkerService, public tareaS: TaskService) { }

  ngOnInit(): void {
    this.getAllWorkersC()
  }

  logout(){
    localStorage.removeItem('_id')
    localStorage.removeItem('email')
    localStorage.removeItem('jwt')
    this.router.navigate(['/'])
  }

  getAllWorkersC(){
    this.workerS.getAllWorkers().subscribe((res: any) => {
      this.workers = res.cont
      console.log(this.workers);
      
    },error => {
      console.log(error);
      
    })
  }

  task_Component(form){
    if(form.valid){
      this.tareaS.addTask(this.tarea).subscribe((res: any)=>{
        iziToast.success({
          title: 'Exito registrar',
          message: `Se registro la tarea`,
          position: 'bottomLeft'
        });
        
      },error => {
        console.log(error);
        
      })  
      
    }
    
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
     
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
    
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.tarea.asignacion = event.container.data[0]._id
      console.log(this.tarea.asignacion)
    }
  }

}
