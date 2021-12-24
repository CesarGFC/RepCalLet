import { Component, OnInit } from '@angular/core';
import { IServices } from 'src/app/interfaces/services.interface';
import { ServicesService } from 'src/app/services/services.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  services:Array<IServices>=[]
  constructor(private servicesService:ServicesService, private toastService:toastService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getDataServices()
  }
  async getDataServices(){
    try{
      this.services=await this.servicesService.getServices().toPromise()
      console.log(this.services)
    }catch(error){
      this.toastService.catchError(error)
    }
  }
}
