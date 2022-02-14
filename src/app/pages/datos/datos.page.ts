import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { toastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  form: FormGroup;
  constructor(
    private toastService: toastService, private userService: UserService) {
    this.form = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      contrasena: new FormControl(null, Validators.required),
      ncontrasena: new FormControl(null, Validators.required),
      nccontrasena: new FormControl(null, Validators.required),
    })
  }

  ngOnInit() {
    this.getMyAccount()
  }
  async getMyAccount() {
    try {
      const res = await this.userService.getMyAccount().toPromise()
      this.form.patchValue(res)
    } catch (error) {
      this.toastService.catchError(error);
    }
  }
  async setDataChanges() {
    try {
      if (this.form.invalid) {
        return this.toastService.presentToast("Datos ingresados no válidos");
      }
      if (this.form.get("ncontrasena").value != this.form.get("nccontrasena").value) {
        return this.toastService.presentToast("Contraseñas no coinciden");
      }
      await this.userService.updateChanges(this.form.value).toPromise()
      this.toastService.presentToast("Éxito al guardar los cambios");
      this.form.reset()
      this.getMyAccount()
    } catch (error) {
      this.toastService.catchError(error);
    }
  }
}
