import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{
constructor(
  private router: Router,
  private routeSnapshot: ActivatedRoute
){}
ngOnInit(): void {
  if(window.location.pathname === '/user' && this.routeSnapshot.snapshot.data['role'] === 'user'){
    this.router.navigate(['user/dashboard'])
  }
  if(window.location.pathname === '/admin' && this.routeSnapshot.snapshot.data['role'] === 'admin'){
    this.router.navigate(['admin/dashboard'])
  }
}
}
