import { Component, OnInit } from '@angular/core';
import { ICashcut } from 'src/app/interfaces/cashcut.interface';
import { CashcutsService } from 'src/app/services/cashcut.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cortecaja',
  templateUrl: './cortecaja.page.html',
  styleUrls: ['./cortecaja.page.scss'],
})
export class CortecajaPage implements OnInit {
  cashcuts:Array<ICashcut>=[]
  textoBuscar=""
  constructor(private cashcutService:CashcutsService, private toastService:toastService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getDataCashcut()
  }
  async getDataCashcut(){
    try {
      this.cashcuts = await this.cashcutService.getCashcuts().toPromise()
      this.cashcuts = this.cashcuts.map(x => ({
        ...x, show: true
      }))
      this.textoBuscar=""
      
    } catch (error) {
      this.toastService.catchError(error)
    }
  }
  onSearch(event) {
    const query= event.target.value.toLowerCase()
    requestAnimationFrame(() => {
      this.cashcuts.forEach((item) => {
        const shouldShow = item.fecha.toLowerCase().indexOf(query) > -1 || item.usuario_id?.nombre.toLowerCase().indexOf(query) > -1;
        item.show = shouldShow;
      });
    });
  }
}
