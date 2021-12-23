import { Component, OnInit } from '@angular/core';
import { ICustomers } from 'src/app/interfaces/customers.interface';
import { CustomersService } from 'src/app/services/customers.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  customers:Array<ICustomers>=[]
  constructor(private customersService:CustomersService,private toastService:toastService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getDataCustomers()
  }
  async getDataCustomers(){
    try{
      this.customers=await this.customersService.getCustomers().toPromise()
      console.log(this.customers)
    }catch(error){
      this.toastService.catchError(error)
    }
  }
}
