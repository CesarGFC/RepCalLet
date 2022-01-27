import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Roles } from 'src/app/enums/roles.enums';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { toastService } from 'src/app/services/toast.service';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.page.html',
  styleUrls: ['./cotizaciones.page.scss'],
})
export class CotizacionesPage implements OnInit {
  formCust:FormGroup;
  constructor(private globalStateService:GlobalStateService, private toastService:toastService, private quotesService:QuotesService) { 
    this.formCust=new FormGroup({
      marca:new FormControl(null,Validators.required),
      desc:new FormControl(null,Validators.required),
    })
  }

  ngOnInit() {
  }
  isAdmin() {
    return Roles.administrador == this.globalStateService.userSession?.user.role
  }
  isCustomer() {
    return Roles.cliente == this.globalStateService.userSession?.user.role
  }
  async solicitarCot() {
    try {
      if (this.formCust.valid) {
        const res = await this.quotesService.newQuote({
          marca:this.formCust.get("marca").value,
          descripcion:this.formCust.get("desc").value
        }).toPromise()
      } else {
        this.formCust.markAllAsTouched()
      }
    } catch (e) {
      this.toastService.catchError(e);
    }
  }
}
