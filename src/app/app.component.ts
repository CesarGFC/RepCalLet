import { Component } from '@angular/core';
import { GlobalStateService } from './services/global-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu=false
  constructor(private GlobalStateService:GlobalStateService, private Router:Router) {
    this.Router
    this.GlobalStateService.asObservable.subscribe(  x=>{
    this.showMenu=!!x
    })
  }
  logout(){
    this.GlobalStateService.userSession=null
    this.Router.navigate(['/login'])
    
  }
}
