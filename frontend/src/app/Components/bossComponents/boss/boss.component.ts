import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { WorkerService } from "../../../Services/worker.service";


@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {

  workers = []

  constructor(public router: Router, public workerS: WorkerService) { }

  ngOnInit(): void {
    this.getAllWorkersC()
  }

  logout(){
    localStorage.removeItem('_id')
    localStorage.removeItem('email')
    localStorage.removeItem('jwt')
    this.router.navigate(['/'])
  }

  getAllWorkersC(){
    this.workerS.getAllWorkers().subscribe((res: any) => {
      this.workers = res.cont
      console.log(this.workers);
      
    },error => {
      console.log(error);
      
    })
  }

}
