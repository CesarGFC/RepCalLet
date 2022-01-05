import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/enums/roles.enums';
import { IProducts } from 'src/app/interfaces/products.interface';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { ProductsService } from 'src/app/services/products.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  products:Array<IProducts>=[]
  constructor(private productsService:ProductsService, private toastService:toastService, private GlobalStateService:GlobalStateService) { }
  isAdmin(){
    return Roles.administrador == this.GlobalStateService.userSession?.user.role
  }
  isCustomer(){
    return Roles.cliente == this.GlobalStateService.userSession?.user.role
  }
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
