import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { toastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {
  employees:Array<IUser>=[]
  constructor(private userService:UserService, private toastService:toastService) { }
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getDataEmployees()
  }
  async getDataEmployees(){
    try{
      this.employees=await this.userService.getEmployees().toPromise()
      console.log(this.employees)
    }catch(error){
      this.toastService.catchError(error)
    }
  }

}
