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
  sales: Array<ISales> = []
  textoBuscar = ''
  constructor(private salesService: salesService, private toastService: toastService) {
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getData()
  }
  getDataAll(productos: Array<IProducts>) {
    return productos.reduce((acum, item) => acum + item.cantidad, 0)
  }
  async getData() {
    try {
      this.sales = await this.salesService.getSales().toPromise()
      this.sales = this.sales.map(x => ({
        ...x, show: true
      }))
      this.textoBuscar=""
    } catch (error) {
      this.toastService.catchError(error)
    }
  }
  onSearch(event) {
    const query = this.textoBuscar.toLowerCase();
    requestAnimationFrame(() => {
      this.sales.forEach((item) => {
        const shouldShow = item.fecha.toLowerCase().indexOf(query) > -1;
        item.show = shouldShow;
        console.log(this.textoBuscar)
      });
    });
  }
}
