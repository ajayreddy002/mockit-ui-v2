import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isloggedIn() && this.authService.hasPermission(route.data['role'])){
      return true
    }
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Not authorized!' });
    localStorage.clear();
    this.router.navigate(['login'])
    return false
  }
  
}
