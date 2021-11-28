import { Component } from '@angular/core';
import { GlobalStateService } from './services/global-state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showMenu=false
  constructor(private GlobalStateService:GlobalStateService) {
    this.GlobalStateService.listenUsr.subscribe(  x=>{
      this.showMenu=!!x
    })
  }
}
