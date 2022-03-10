import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GeneralService } from "../../Services/general.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:any = {}


  constructor(public generalS: GeneralService, private router: Router) { }

  ngOnInit(): void {
  }

  login_Component(data: any){
    if(data.valid){
      this.generalS.login(this.user).subscribe((res: any)=>{
         localStorage.setItem('_id', res.data._id)
          localStorage.setItem('jwt', res.jwt)
          localStorage.setItem('email', res.data.email)
        if(res.data.tipoUsuario == 'Admin' || res.data.tipoUsuario == 'admin'){         
          this.router.navigate(['/boss'])
        }else{
          this.router.navigate(['/worker'])
        }
      })
    }else{
      
      console.log('estas mal');
    }
    
  }


}
