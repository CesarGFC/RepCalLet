import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/interfaces/products.interface';
import { productsService } from 'src/app/services/products.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  products:Array<IProducts>=[]
  constructor(private productsService:productsService, private toastService:toastService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getDataProduct()
  }
  async getDataProduct(){
    try{
      this.products=await this.productsService.getProducts().toPromise()
      console.log(this.products)
    }catch(error){
      this.toastService.catchError(error)
    }
  }
}
