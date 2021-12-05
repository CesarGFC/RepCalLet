import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [ LoginService ]
})
export class LoginPage implements OnInit {
  form:FormGroup;

  constructor(private globalStateService: GlobalStateService, private Router:Router, private LoginService:LoginService) { 
    this.form=new FormGroup({
      user:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
    }
    )
  }
  iniciarSesion(){
    if (this.form.valid){
    this.globalStateService.userSession='value'
    this.Router.navigate(['/tabs'])
    }else{
      this.form.markAllAsTouched()
    }
  }
  ngOnInit() {
  }

}
