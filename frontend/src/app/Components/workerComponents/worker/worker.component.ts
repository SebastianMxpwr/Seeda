import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../../Services/task.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  tasks: Array<any> = []

  constructor(public taskService: TaskService, public router: Router) { }

  ngOnInit(): void {
    this.getAllTaskC()
    if(!localStorage.getItem('_id') && !localStorage.getItem('jwt')){
      this.router.navigate(['/'])
    }
  }

  logout(){
    localStorage.removeItem('_id')
    localStorage.removeItem('email')
    localStorage.removeItem('jwt')
    this.router.navigate(['/'])
  }

  getAllTaskC(){
    this.taskService.getTaskForUser().subscribe((res:any)=>{
      console.log(res);
      
      this.tasks = res.cont
       
    },error=>{
      console.log(error);
      
    })
  }

  completeTaskC(id: string){
    const body = {}
    this.taskService.completeTask(id, body).subscribe((res)=>{
      console.log(res);
      this.tasks.pop()
      
      this.getAllTaskC()
      
    },err=>{
      console.log(err);
      
    })
    
  }

}
