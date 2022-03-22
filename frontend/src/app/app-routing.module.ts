import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossComponent } from './Components/bossComponents/boss/boss.component';
import { LoginComponent } from './Components/login/login.component';
import { ProyectosComponent } from './Components/workerComponents/proyectos/proyectos.component';
import { WorkerComponent } from './Components/workerComponents/worker/worker.component';
import { FormEmpleadosComponent  } from "./Components/bossComponents/form-empleados/form-empleados.component";
import { FormTareasComponent } from "./Components/bossComponents/form-tareas/form-tareas.component";
import { FormProyectosComponent } from "./Components/bossComponents/form-proyectos/form-proyectos.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'boss', component: BossComponent},
  {path: 'boss/forme', component: FormEmpleadosComponent},
  {path: 'boss/formt', component: FormTareasComponent},
  {path: 'boss/formp', component: FormProyectosComponent},
  {path: 'worker', component: WorkerComponent},
  {path: 'worker/projects', component: ProyectosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
