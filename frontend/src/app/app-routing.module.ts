import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossComponent } from './Components/bossComponents/boss/boss.component';
import { LoginComponent } from './Components/login/login.component';
import { ProyectosComponent } from './Components/workerComponents/proyectos/proyectos.component';
import { WorkerComponent } from './Components/workerComponents/worker/worker.component';
import { FormEmpleadosComponent  } from "./Components/bossComponents/form-empleados/form-empleados.component";
import { FormTareasComponent } from "./Components/bossComponents/form-tareas/form-tareas.component";
import { FormProyectosComponent } from "./Components/bossComponents/form-proyectos/form-proyectos.component";
import { VigilanteGuard } from './Guards/vigilante.guard';
import { MostrarEmpleadosComponent } from './Components/bossComponents/mostrar-empleados/mostrar-empleados.component';
import { EditarTrabajadorComponent } from './Components/bossComponents/editar-trabajador/editar-trabajador.component';
import { AnadirEmpleadoComponent } from './Components/bossComponents/anadir-empleado/anadir-empleado.component';
import { EditarTareaComponent } from './Components/bossComponents/editar-tarea/editar-tarea.component';
import { MostrarTareasComponent } from './Components/bossComponents/mostrar-tareas/mostrar-tareas.component';
import { MostrarProyectosComponent } from './Components/bossComponents/mostrar-proyectos/mostrar-proyectos.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  
  {path: 'boss', component: BossComponent, canActivate:[VigilanteGuard]},
  {path: 'boss/trabajadores', component: MostrarEmpleadosComponent, canActivate:[VigilanteGuard]},
  {path: 'boss/trabajadores/editar/:id', component: EditarTrabajadorComponent, canActivate:[VigilanteGuard]},
  {path: 'boss/forme', component: FormEmpleadosComponent, canActivate:[VigilanteGuard]},
  
  {path: 'boss/tareas', component: MostrarTareasComponent, canActivate:[VigilanteGuard]},
  {path: 'boss/tareas/formt', component: FormTareasComponent, canActivate:[VigilanteGuard]},
  {path: 'boss/tareas/editar/:id', component: EditarTareaComponent, canActivate:[VigilanteGuard]},
  
  {path: 'boss/proyectos', component: MostrarProyectosComponent, canActivate:[VigilanteGuard]},
  {path: 'boss/proyectos/formp', component: FormProyectosComponent, canActivate:[VigilanteGuard]},
  {path: 'boss/proyectos/anadir-worker/:id', component: AnadirEmpleadoComponent, canActivate:[VigilanteGuard]},

  {path: 'worker', component: WorkerComponent,canActivate:[VigilanteGuard]},
  {path: 'worker/projects', component: ProyectosComponent, canActivate:[VigilanteGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
