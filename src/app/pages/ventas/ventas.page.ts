import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/interfaces/products.interface';
import { ISales } from 'src/app/interfaces/sales.interface';
import { salesService } from 'src/app/services/sales.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  sales:Array<ISales>=[]
  textoBuscar=''
  constructor(private salesService:salesService,  private toastService:toastService) { 
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getData()
  }
  getDataAll(productos:Array<IProducts>){
    return productos.reduce((acum,item)=>acum+item.cantidad,0)
  }
  async getData(){
    try {
      this.sales = await this.salesService.getSales().toPromise()
      console.log(this.sales)
    } catch (error) {
      this.toastService.catchError(error)
    }
  }
  onSearch(event){
    this.textoBuscar=event.detail.value;
  }
}
