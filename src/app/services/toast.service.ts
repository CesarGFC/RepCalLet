import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class toastService {
    constructor(private toast:ToastController, public alertCtrl:AlertController) { 

  }
  async presentToast(mensaje) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }
  async showAlert(title:string, subtitle:string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: subtitle,
      buttons: ['Aceptar']
    });
    alert.present();
  }
  async catchError(error){
    let message = ''
    if (error.status < 500) {
        message = error.error.message;
    } else {
        message = 'Lo sentimos, algo salió mal';
    }
    const alert = await this.alertCtrl.create({
        header: 'Error',
        message: message,
        buttons: ['Aceptar']
      });
      alert.present();
  }
}