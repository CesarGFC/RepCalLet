import { Component, OnInit } from '@angular/core';
import { IMovements } from 'src/app/interfaces/movements.interface';
import { movementsService } from 'src/app/services/movements.service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
  movements:Array<IMovements>=[]
  constructor(private movementsService:movementsService, private toastService:toastService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getDataServices()
  }
  async getDataServices(){
    try{
      this.movements=await this.movementsService.getMovements().toPromise()
      console.log(this.movements)
    }catch(error){
      this.toastService.catchError(error)
    }
  }
}
