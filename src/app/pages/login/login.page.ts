import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
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

  constructor(
    private globalStateService: GlobalStateService, 
    private Router:Router, 
    private LoginService:LoginService,
    private toastController: ToastController ) { 
    this.form=new FormGroup({
      user:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
    })
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario y/o contraseña incorrectos',
      duration: 2000,
    });
    toast.present();
    //this.form.valueChanges.toPromise.arguments = ""
  }
  async iniciarSesion() {
    try {
      if (this.form.valid) {
        const res = await this.LoginService.validateLogin(this.form.get("user").value, this.form.get("password").value,).toPromise()
        this.globalStateService.userSession=res
        this.Router.navigate(['/tabs'])
      } else {
        this.form.markAllAsTouched()
      }
      //document.getElementById("pass").replaceWith("")
    } catch (e) {
      this.presentToast();
    }
  }
  ngOnInit() {
  }

}
