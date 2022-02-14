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
  textoBuscar=''
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
      this.notes = await this.notesService.getNotes(true).toPromise()
      this.notes = this.notes.map(note => ({
        ...note, show:true, articulos: note.articulos.filter(articulo => articulo.estado.nombre == "Entregado")
      }))
      this.textoBuscar=""
    } catch (error) {
      this.toastService.catchError(error)
    }
  }
  onSearch(event) {
    const query = event.target.value.toLowerCase()
    requestAnimationFrame(() => {
      this.notes.forEach((item) => {
        const shouldShow = item.fecha_llegada.toLowerCase().indexOf(query) > -1 
        || item.numero.toString().toLowerCase().indexOf(query) > -1 ||
        item.cliente.nombre.toLowerCase().indexOf(query) > -1;
        item.show = shouldShow;
      });
    });
  }
}
