import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { filter, map } from 'rxjs';
import { Navlink, TokenInfo } from 'src/app/models/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pathName = '';
  token!: string | null;
  role!: string;
  decoded!: TokenInfo;
  pageName!: string;
  sideMenuData: Navlink[] = [];
  showMailVerifyAlert = true;
  constructor(
    private router: Router) {
    this.pathName = router.url.split('/')[1];
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('token') as string;
    this.decoded = jwt_decode(this.token);
    this.showMailVerifyAlert = !this.decoded.isEmailVerified;
    this.role = this.decoded.role;
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd || event instanceof Scroll),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeName = '';
          while (route?.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['name']) {
            routeName = route?.snapshot.data['name'];
          }
          return routeName;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.pageName = title
        }
      });
    this.loadSidenavMenus();
  }
  loadSidenavMenus() {
    if (this.decoded.role === 'admin') {
      this.sideMenuData.push(
        { name: 'Dashboard', routerLink: `/${this.decoded.role}/dashboard`, icon: 'pi-home' },
        { name: 'Users', routerLink: `/${this.decoded.role}/user-list`, icon: 'pi-users' },
        { name: 'Plans', routerLink: `/${this.decoded.role}/plans`, icon: 'pi-slack' }
      )
    }
    if (this.decoded.role === 'user') {
      this.sideMenuData.push(
        { name: 'Dashboard', routerLink: `/${this.decoded.role}/dashboard`, icon: 'pi-home' },
        { name: 'Interviews', routerLink: `/${this.decoded.role}/interview`, icon: 'pi-calendar' },
        { name: 'Profile', routerLink: `/${this.decoded.role}/profile`, icon: 'pi-user' },
        { name: 'Refer and Earn', routerLink: `${this.decoded.role}/profile`, icon: 'pi-share-alt' }
      )
    }
    if (this.decoded.role === 'interviewer') {
      this.sideMenuData.push(
        { name: 'Dashboard', routerLink: `/${this.decoded.role}/dashboard`, icon: 'pi-home' },
        { name: 'Interviews', routerLink: `/${this.decoded.role}/interview`, icon: 'pi-calendar' },
        { name: 'Profile', routerLink: `/${this.decoded.role}/profile`, icon: 'pi-user' },
        { name: 'Refer and Earn', routerLink: `/${this.decoded.role}/profile`, icon: 'pi-share-alt' }
      )
    }
  }
  logout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
