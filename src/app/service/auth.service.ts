import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isloggedIn() {
    return !!localStorage.getItem('token')
  }
  hasPermission(role: string): boolean{
    const token = localStorage.getItem('token') as string;
    if(token !== (null || undefined)){
      const decoded = jwt_decode(token) as any;
      if(decoded.role === role) {
        return true
      }
    }
    return false;
  }
}
