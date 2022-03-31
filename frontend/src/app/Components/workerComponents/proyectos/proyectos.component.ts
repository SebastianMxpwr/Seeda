import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProjectService } from "../../../Services/project.service";


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  projects = []
  tareasAsginadas = []
  empleadosAsginados = []

  constructor(private router: Router, public projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjectWorkerC()
    
  }


  getProjectWorkerC(){
    const id= localStorage.getItem('_id')
    this.projectService.getProjectWorker(id).subscribe((res:any)=>{
      console.log(res);
      this.projects=res.cont
      this.tareasAsginadas = res.cont2
      this.empleadosAsginados = res.cont3
     console.log(this.projects, this.tareasAsginadas, this.empleadosAsginados);
     
      
      
    },err=>{
      console.log(err);
      
    })
  }

}
