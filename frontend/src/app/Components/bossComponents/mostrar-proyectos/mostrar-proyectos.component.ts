import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-mostrar-proyectos',
  templateUrl: './mostrar-proyectos.component.html',
  styleUrls: ['./mostrar-proyectos.component.css']
})
export class MostrarProyectosComponent implements OnInit {

  projects = []
  workers = []
  tasks = []
  constructor(public projectS: ProjectService) { }


  ngOnInit(): void {
    this.getAllProjectsC()
  }

  getAllProjectsC(){
    this.projectS.getAllProjects().subscribe((res: any) => {
      this.projects = res.cont1
      this.tasks = res.cont2
      this.workers = res.cont3
    },error =>{
      console.log(error);
      
    })
  } 

}
