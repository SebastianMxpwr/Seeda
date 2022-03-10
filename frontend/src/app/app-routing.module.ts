import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossComponent } from './Components/boss/boss.component';
import { LoginComponent } from './Components/login/login.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { WorkerComponent } from './Components/worker/worker.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'boss', component: BossComponent},
  {path: 'worker', component: WorkerComponent},
  {path: 'projects', component: ProyectosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
