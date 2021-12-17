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

}
