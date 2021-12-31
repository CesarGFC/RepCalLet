import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  form:FormGroup
  constructor(private toast:toastService, private user:UserService, private router:Router) {
    this.form = new FormGroup({
      correo:new FormControl(null,Validators.required)
    })
   }
   async recoveryPass(){
    try {
      if(this.form.invalid){
        this.form.markAllAsTouched()
        this.toast.presentToast("Completar todos los campos")
        return 
      }
      await this.user.recoveryPass(this.form.get("correo").value).toPromise()
      this.toast.presentToast("Correo enviado")
      this.router.navigate(['/login'])
    } catch (error) {
      this.toast.catchError(error)
    }
 }
  ngOnInit() {
  }

}
