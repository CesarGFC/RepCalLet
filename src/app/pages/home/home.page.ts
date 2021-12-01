import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  form:FormGroup;

  constructor(private globalStateService: GlobalStateService, private Router:Router) { 
    this.form=new FormGroup({
      user:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),

    }
    )
  }
  iniciarSesion(){
    this.globalStateService.userSession='value'
    this.Router.navigate(['/tabs'])
  }
  ngOnInit() {
  }

}
