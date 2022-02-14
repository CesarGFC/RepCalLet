import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base:string = environment.API_URL
  constructor(private HttpClient:HttpClient) { 

  }
  newUser(data:IUser):Observable<IUser>{
    return this.HttpClient.post(this.base + "users",{
      ...data
    }) as any
  }
  getEmployees():Observable<Array<IUser>>{
    return this.HttpClient.get(this.base+ "users/empleados") as any
  }
  getMyAccount():Observable<Array<IUser>>{
    return this.HttpClient.get(this.base+ "users/micuenta") as any
  }
  updateChanges(usuario){
    return this.HttpClient.put(this.base+"users/cambiardatos", usuario) as any
  }
  recoveryPass(correo:string){
    return this.HttpClient.post(this.base + "users/recovery-password",{
      correo
    }) as any
  }

}
