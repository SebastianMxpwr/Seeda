import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-proyectos',
  templateUrl: './form-proyectos.component.html',
  styleUrls: ['./form-proyectos.component.css']
})
export class FormProyectosComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('_id')
    localStorage.removeItem('email')
    localStorage.removeItem('jwt')
    this.router.navigate(['/'])
  }

}
