import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

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
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submitLogin() {
    if (this.loginForm.valid) {
      this.isSubmitted = false;
      this.apiService.post('users/login', this.loginForm.value).subscribe((data: any) => {
          console.log(data);
        });
    }
    return (this.isSubmitted = true);
  }
}
