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
  textoBuscar=''
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
      this.customers=this.customers.map(x=>({
        ...x,show:true
      }))
    }catch(error){
      this.toastService.catchError(error)
    }
  }
  onSearch(event) {
    const query= event.target.value.toLowerCase()
    requestAnimationFrame(() => {
      this.customers.forEach((item) => {
        const shouldShow = item.nombre.toLowerCase().indexOf(query) > -1 || item.telefono1.toLowerCase().indexOf(query) > -1 || item.telefono2.toLowerCase().indexOf(query) > -1;
        item.show = shouldShow;
      });
    });
  }
}
