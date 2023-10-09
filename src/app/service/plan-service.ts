import { Injectable } from "@angular/core";
import { Plan } from "../models/plan.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PlanService {
    basePlanAPIUrl = environment.baseAPIUrl+'common/plan'
    constructor(
        private http: HttpClient
    ) { }
    getPlans(): Observable<Plan[]> {
        return this.http.get<Plan[]>(this.basePlanAPIUrl)
    }
}