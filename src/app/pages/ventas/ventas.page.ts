import { Component, OnInit } from '@angular/core';
import { ISales } from 'src/app/interfaces/sales.interface';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { SalesService } from 'src/app/services/sales.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  sales:Array<ISales>=[]
  constructor(private salesService:SalesService,  private toastService:toastService, private globalStateService:GlobalStateService) { 
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getData()
  }
  async getData(){
    try {
      this.sales = await this.salesService.getSales().toPromise()
      console.log(this.sales)
    } catch (error) {
      this.toastService.catchError(error)
    }
  }
}
