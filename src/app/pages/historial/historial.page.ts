import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/enums/roles.enums';
import { IArticulo, INotes } from 'src/app/interfaces/notes.interface';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { notesService } from 'src/app/services/notes-service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  notes: Array<INotes> = []
  constructor(private notesService: notesService, private toastService: toastService, private globalStateService: GlobalStateService) {
  }
  ngOnInit() {

  }
  isAdmin() {
    return Roles.administrador == this.globalStateService.userSession?.user.role
  }
  isCustomer() {
    return Roles.cliente == this.globalStateService.userSession?.user.role
  }
  ionViewWillEnter() {
    this.getData()
  }
  getDataAll(articulos: Array<IArticulo>) {
    return articulos.reduce((acum, item) => acum + item.cantidad, 0)
  }
  async getData() {
    try {
      this.notes = await this.notesService.getNotes().toPromise()
      console.log(this.notes)
    } catch (error) {
      this.toastService.catchError(error)
    }
  }
}
