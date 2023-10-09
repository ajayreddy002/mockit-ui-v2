import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pathName = '';
  token: any;
  role: any;
  decoded: any;
  myTableData: any;
  myTableColumns: any;
  pageName: any;
  constructor(
    private router: Router) {
    this.pathName = router.url.split('/')[1];
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.decoded = jwt_decode(this.token);
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

  }

  logout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
