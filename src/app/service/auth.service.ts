import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseAPIUrl = environment.baseAPIUrl;
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  isloggedIn() {
    return !!localStorage.getItem('token')
  }

  hasPermission(role: string): boolean {
    const token = localStorage.getItem('token') as string;
    if (token !== (null || undefined)) {
      const decoded = jwt_decode(token) as any;
      return decoded.role === role
    }
    return false;
  }

  // For initial navigation after login
  navigateUser() {
    const token = localStorage.getItem('token') as string;
    const decoded = jwt_decode(token) as any;
    if (token !== (null || undefined)) {
      switch (decoded.role) {
        case 'user':
          this.router.navigate(['user'])
          break;
        case 'admin':
          this.router.navigate(['admin'])
          break;
        case 'interviewer':
          this.router.navigate(['interviewer'])
          break;
        default:
          this.router.navigate(['login'])
          break;
      }
    }
  }
  isTokenExpired(token: string): boolean {
    const decoded = jwt_decode(token) as any;
    const now = Date.now() / 1000; // Convert current time to seconds since epoch
    console.log(decoded)
    return decoded.exp < now;
  }
}
