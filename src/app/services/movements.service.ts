import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IMovements } from "../interfaces/movements.interface";

@Injectable({
    providedIn: 'root'
})
export class movementsService {
    base: string = environment.API_URL
    constructor(private HttpClient: HttpClient) {
    }
    getMovements(): Observable<IMovements[]> {
        return this.HttpClient.get(this.base + "movements") as any
    }
}