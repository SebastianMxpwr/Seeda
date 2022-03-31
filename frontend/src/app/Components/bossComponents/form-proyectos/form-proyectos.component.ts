import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { WorkerService } from 'src/app/Services/worker.service';
import { TaskService } from 'src/app/Services/task.service';
import { ProjectService } from 'src/app/Services/project.service';


@Component({
  selector: 'app-form-proyectos',
  templateUrl: './form-proyectos.component.html',
  styleUrls: ['./form-proyectos.component.css']
})
export class FormProyectosComponent implements OnInit {

  project = {
    nombreTarea: '',
    descripcion: '',
    empladosAsignados: [],
    tareasAsginadas: []
  }
  
  workers = []
  workerAsing = []

  tasks = []
  taskAsing = []

  constructor(public router: Router, public workerS: WorkerService,  public taskS: TaskService, public projectS: ProjectService) { }

  ngOnInit(): void {
    this.getAllTaskC()
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

  getAllTaskC(){
    this.taskS.getAllTask().subscribe((res: any)=>{
      this.tasks = res.cont
      console.log(this.tasks);
      
    },err=>{
      console.error(err);
      
    })
  }
  
  
  project_Component(taskform){
    this.projectS.postProject(this.project).subscribe((res: any)=>{
      console.log(res);
      
    }, err=>{
      console.error(err);
      
    })
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
    }
  }
  
  dropWorker(event: any) {
    if (event.previousContainer === event.container) {
     
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
    
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.project.empladosAsignados.push(event.container.data[0]._id)
      console.log(this.project.empladosAsignados)
    }
  }

  dropTask(event: any) {
    if (event.previousContainer === event.container) {
     
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data);
      

    } else {
    
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.project.tareasAsginadas.push( event.container.data[0]._id )
      console.log(this.project.empladosAsignados)
    }
  }

}
