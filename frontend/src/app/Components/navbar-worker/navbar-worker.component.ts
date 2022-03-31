import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-worker',
  templateUrl: './navbar-worker.component.html',
  styleUrls: ['./navbar-worker.component.css']
})
export class NavbarWorkerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  logout(){
    localStorage.removeItem('_id')
    localStorage.removeItem('email')
    localStorage.removeItem('jwt')
    this.router.navigate(['/'])
  }

}
