import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { LoaderService } from '../service/loader.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  CandidateForm!: FormGroup;
  InterviewerForm!: FormGroup;
  isCandidateSubmitted = false;
  isInterviewerSubmitted = false;
  isInterveiwer = false;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private loaderService: LoaderService) { }
  ngOnInit(): void {
    this.CandidateForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      password: ["", Validators.required],
    })
    this.InterviewerForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  CandidateSignup() {
    console.log(this.CandidateForm.value);
    if (this.CandidateForm.valid) {
      this.isCandidateSubmitted = false;
      this.apiService.post("users/create", this.CandidateForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/login'])
        this.loaderService.hideLoader();
      }, (error) => {
        console.log("Api Error: ", error);
        this.loaderService.hideLoader();
      })
    } else {
      this.isCandidateSubmitted = true;
      this.loaderService.hideLoader();
    }
  }
  
  InterviewerSignup() {
    this.loaderService.showLoader();
    this.InterviewerForm.value.userRole = "interviewer";
    console.log(this.InterviewerForm.value);
    if (this.InterviewerForm.valid) {
      this.isInterviewerSubmitted = false;
      this.apiService.post("users/create", this.InterviewerForm.value).subscribe((res) => {
        console.log(res);
        this.loaderService.hideLoader();
        this.router.navigate(['/login'])
      }, (error) => {
        console.log("Api Error: ", error);
        this.loaderService.hideLoader();
      })
    } else {
      this.isInterviewerSubmitted = true;
      this.loaderService.hideLoader();
    }
  }

}
