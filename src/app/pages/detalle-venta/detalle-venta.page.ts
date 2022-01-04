import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISales } from 'src/app/interfaces/sales.interface';
import { salesService } from 'src/app/services/sales.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.page.html',
  styleUrls: ['./detalle-venta.page.scss'],
})
export class DetalleVentaPage implements OnInit {
  sale:ISales
  constructor(private salesService:salesService, private toastService:toastService, private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params=>{
      this.getDataV(params.saleid)
    })
  }
  ngOnInit() {
  }
  ionViewWillEnter(){
    // this.getData()
  }
  async getDataV(saleid:string){
    try {
      this.sale = await this.salesService.getById(saleid).toPromise()
      console.log(this.sale)
    } catch (error) {
      this.toastService.catchError(error)
    }
  }
}
