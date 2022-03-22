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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BossComponent,
    WorkerComponent,
    ProyectosComponent,
    FormEmpleadosComponent,
    FormProyectosComponent,
    FormTareasComponent
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
