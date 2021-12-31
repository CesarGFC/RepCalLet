import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  form:FormGroup
  constructor(private toast:toastService, private user:UserService, private router:Router) {
    this.form = new FormGroup({
      nombre:new FormControl(null,Validators.required),
      telefono:new FormControl(null,Validators.required),
      correo:new FormControl(null,Validators.required),
      contrasena:new FormControl(null,Validators.required),
      ccontrasena:new FormControl(null,Validators.required)
    })
   }
   async registroCliente(){
      try {
        if(this.form.invalid){
          this.form.markAllAsTouched()
          this.toast.presentToast("Completar todos los campos")
          return 
        }
        if(this.form.get("contrasena").value !=this.form.get("ccontrasena").value){
          this.form.markAllAsTouched()
          this.toast.presentToast("Contraseñas no coinciden")
          return 
        }
        await this.user.newUser(this.form.value).toPromise()
        this.toast.presentToast("Registro exitoso")
        this.router.navigate(['/login'])
      } catch (error) {
        this.toast.catchError(error)
      }
   }
  ngOnInit() {
  }

}
