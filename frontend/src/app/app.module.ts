import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEmpleadosComponent  } from "./Components/bossComponents/form-empleados/form-empleados.component";
import { FormProyectosComponent  } from "./Components/bossComponents/form-proyectos/form-proyectos.component";
import { FormTareasComponent  } from "./Components/bossComponents/form-tareas/form-tareas.component";
import { LoginComponent } from './Components/login/login.component';
import { WorkerComponent } from "./Components/workerComponents/worker/worker.component";
import { BossComponent } from './Components/bossComponents/boss/boss.component';
import { ProyectosComponent } from './Components/workerComponents/proyectos/proyectos.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavbarWorkerComponent } from './Components/navbar-worker/navbar-worker.component';
import { MostrarEmpleadosComponent } from './Components/bossComponents/mostrar-empleados/mostrar-empleados.component';
import { EditarTrabajadorComponent } from './Components/bossComponents/editar-trabajador/editar-trabajador.component';
import { AnadirEmpleadoComponent } from './Components/bossComponents/anadir-empleado/anadir-empleado.component';
import { MostrarTareasComponent } from './Components/bossComponents/mostrar-tareas/mostrar-tareas.component';
import { EditarTareaComponent } from './Components/bossComponents/editar-tarea/editar-tarea.component';
import { MostrarProyectosComponent } from './Components/bossComponents/mostrar-proyectos/mostrar-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BossComponent,
    WorkerComponent,
    ProyectosComponent,
    FormEmpleadosComponent,
    FormProyectosComponent,
    FormTareasComponent,
    NavbarComponent,
    NavbarWorkerComponent,
    MostrarEmpleadosComponent,
    EditarTrabajadorComponent,
    AnadirEmpleadoComponent,
    MostrarTareasComponent,
    EditarTareaComponent,
    MostrarProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    DragDropModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
