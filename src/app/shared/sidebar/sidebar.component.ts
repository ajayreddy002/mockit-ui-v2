import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  pathName = '';
  constructor(private router: Router) {
    this.pathName = router.url.split('/')[1];
    // if (router.url.includes('interview')) {
    //   this.pathName = 'Book interview';
    // } else {
    //   this.pathName = router.url.split('/')[1];
    // }
  }
}
