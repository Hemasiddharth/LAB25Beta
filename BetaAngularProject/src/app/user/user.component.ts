import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  original : any
  constructor(public router: Router){

  }

 public selectOption = [  
    {id: 1, name: 'Home page'},  
    {id: 2, name: 'About us'},  
    {id: 3, name: 'contact us'},
    {id: 4, name: 'Logout'}  
  ]; 
  
 public doAction(value:string){
 if(value === 'Logout'){
  this.router.navigateByUrl('/login')
 } 
  }

}
