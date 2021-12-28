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
  constructor(private cashcutService:CashcutsService, private toastService:toastService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getDataCashcut()
  }
  async getDataCashcut(){
    try {
      this.cashcuts = await this.cashcutService.getCashcuts().toPromise()
      console.log(this.cashcuts)
    } catch (error) {
      this.toastService.catchError(error)
    }
  }
}
