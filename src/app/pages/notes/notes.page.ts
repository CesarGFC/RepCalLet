import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/enums/roles.enums';
import { IArticulo, INotes } from 'src/app/interfaces/notes.interface';
import { GlobalStateService } from 'src/app/services/global-state.service';
import { notesService } from 'src/app/services/notes-service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-notes',
  templateUrl: 'notes.page.html',
  styleUrls: ['notes.page.scss']
})
export class NotesPage implements OnInit{
  displayNombre = ""
  textoBuscar=''
  notes:Array<INotes>=[]
  constructor(private notesService:notesService, private toastService:toastService, private globalStateService:GlobalStateService) {
    this.displayNombre=this.globalStateService.userSession?.user?.name.split(" ")[0]
  }
  ngOnInit(){
      
  }
  ionViewWillEnter(){
    this.getData()
  }
  isAdmin() {
    return Roles.administrador == this.globalStateService.userSession?.user.role
  }
  isCustomer() {
    return Roles.cliente == this.globalStateService.userSession?.user.role
  }
  getDataAll(articulos:Array<IArticulo>){
    return articulos.reduce((acum,item)=>acum+item.cantidad,0)
  }
  async getData(){
    try{
      this.notes= await this.notesService.getNotes().toPromise()
      this.notes = this.notes.map(x => ({
        ...x, show: true
      }))
      this.textoBuscar=""
    }catch(error){
      this.toastService.catchError(error)
    }  
  }
  onSearch(event) {
    const query= event.target.value.toLowerCase()
    requestAnimationFrame(() => {
      this.notes.forEach((item) => {
        const shouldShow = item.fecha_llegada.toLowerCase().indexOf(query) > -1 || item.numero.toString().indexOf(query) > -1 || item.cliente.nombre.toLowerCase().indexOf(query) > -1;;
        item.show = shouldShow;
      });
    });
  }
}
