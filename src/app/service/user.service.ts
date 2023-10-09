import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { APIResponse } from "../models/common.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseAPIUrl = `${environment.baseAPIUrl}users`
    constructor(
        private httpClient: HttpClient
    ) { }
    getInterviewsByUserId(): Observable<APIResponse> {
        return this.httpClient.get<APIResponse>(`${this.baseAPIUrl}/interviews`)
    }
}