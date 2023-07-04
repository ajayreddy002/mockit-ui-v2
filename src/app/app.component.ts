import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mockit-ui-v2';
  stripePromise = loadStripe(environment.stripe);
  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ){}
  async checkout() {
    this.loaderService.showLoader();
    this.http
      .post(`${environment.baseAPIUrl}interview/checkout`, {})
      .subscribe((data: any) => {
        // This will return the stripe checkout url
        window.open(data, '_self');
        this.loaderService.hideLoader();
      });
  }
}
