import { Component, OnInit } from '@angular/core';
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
  notes:Array<INotes>=[]
  constructor(private notesService:notesService, private toastService:toastService, private globalStateService:GlobalStateService) {
    this.displayNombre=this.globalStateService.userSession?.user?.name.split(" ")[0]
  }
  ngOnInit(){
      
  }
  ionViewWillEnter(){
    this.getData()
  }
  getDataAll(articulos:Array<IArticulo>){
    return articulos.reduce((acum,item)=>acum+item.cantidad,0)
  }
  async getData(){
    try{
      this.notes= await this.notesService.getNotes().toPromise()
      console.log(this.notes)
    }catch(error){
      this.toastService.catchError(error)
    }  
  }

}
