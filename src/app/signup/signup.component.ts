import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }
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
      })
      this.router.navigate(['/login'])
    } else {
      this.isCandidateSubmitted = true;
    }
  }
  
  InterviewerSignup() {
    this.InterviewerForm.value.userRole = "interviewer";
    console.log(this.InterviewerForm.value);
    if (this.InterviewerForm.valid) {
      this.isInterviewerSubmitted = false;
      this.apiService.post("users/create", this.InterviewerForm.value).subscribe((res) => {
        console.log(res);
      })
      this.router.navigate(['/login'])
    } else {
      this.isInterviewerSubmitted = true;
    }
  }

}
