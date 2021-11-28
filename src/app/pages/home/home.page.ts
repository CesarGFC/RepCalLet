import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(private globalStateService: GlobalStateService, private Router:Router) { 

  }
  iniciarSesion(){
    this.globalStateService.setSession('value')
    this.Router.navigate(['/tabs'])
  }
  ngOnInit() {
  }

}
