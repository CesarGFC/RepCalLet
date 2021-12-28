import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INotes } from 'src/app/interfaces/notes.interface';
import { notesService } from 'src/app/services/notes-service';
import { toastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-detalle-nota',
  templateUrl: './detalle-nota.page.html',
  styleUrls: ['./detalle-nota.page.scss'],
})
export class DetalleNotaPage implements OnInit {
  note:INotes
  constructor(private notesService:notesService, private toastService:toastService, private activatedRoute:ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(params=>{
        this.getData(params.noteid)
      })
   }

  ngOnInit() {
  }
  ionViewWillEnter(){
   // this.getData()
  }
  async getData(noteid:string){
    try{
      this.note= await this.notesService.getById(noteid).toPromise()
      console.log(this.note)
    }catch(error){
      this.toastService.catchError(error)
    }  
  }
}
