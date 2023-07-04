import { Component } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  isLoading !: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.loaderState.subscribe((state) => {
      this.isLoading = state;
    });
  }
}
