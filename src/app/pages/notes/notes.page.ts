import { Component, OnInit } from '@angular/core';
import { INotes } from 'src/app/interfaces/notes.interface';
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
    this.displayNombre=this.globalStateService.userSession?.user?.name
  }
  ngOnInit(){
      
  }
  ionViewWillEnter(){
    this.getData()
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
