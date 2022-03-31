import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {

  id: string
  tarea = {
    asignacion:'',
    completado: false,
    createdAt: '',
    descripcion: '',
    nombreTarea: '',
    updatedAt: '',
    __v: 0,
    _id: ''

  }
  constructor(private aRouter: ActivatedRoute, public tareaS: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTareaId()
  }

  obtenerTareaId(){
    this.aRouter.params.subscribe(params=>{
      this.id = params['id']
      this.tareaS.getTaskId(this.id).subscribe((res:any)=>{
        this.tarea = res.cont        
      },error=>{
        console.error(error);
        
      })
    })
  }

  actualizarTarea(data){
    this.tareaS.editTask(this.id, this.tarea).subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/boss/tareas'])
    },err=>{
      console.error(err);
      
    })
  }

}
