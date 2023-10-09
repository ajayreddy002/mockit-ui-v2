import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { APIResponse } from "../models/common.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DashBoardService {
    baseAPIUrl = environment.baseAPIUrl;
    constructor(private httpClient: HttpClient) { }
    getCountInfo(endPoint: string): Observable<APIResponse> {
        return this.httpClient.get<APIResponse>(`${this.baseAPIUrl}${endPoint}`)
    }
}