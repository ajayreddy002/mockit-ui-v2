import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { LoaderService } from '../service/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private loaderService: LoaderService
  ) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submitLogin() {
    this.loaderService.showLoader();
    if (this.loginForm.valid) {
      this.isSubmitted = false;
      this.apiService.post('users/login', this.loginForm.value).subscribe((data: any) => {
        localStorage.setItem('token', data.token)
        this.router.navigate(['user']);
        this.loaderService.hideLoader();
      }, (error) => {
        console.log("Api Error: ", error);
        this.loaderService.hideLoader();
      });
    }
    this.loaderService.hideLoader();
    return (this.isSubmitted = true);
  }
}
