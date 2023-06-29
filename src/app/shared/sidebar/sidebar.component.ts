import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pathName = '';
  token: any;
  role: any;
  decoded:any;
  myTableData: any;
  myTableColumns: any;
  constructor(private router: Router) {
    this.pathName = router.url.split('/')[1];
    // if (router.url.includes('interview')) {
    //   this.pathName = 'Book interview';
    // } else {
    //   this.pathName = router.url.split('/')[1];
    // }
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.decoded = jwt_decode(this.token);
    this.role = this.decoded.role
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
