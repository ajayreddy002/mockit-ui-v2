import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  CandidateForm!: FormGroup;
  InterviewerForm!: FormGroup;
  isSubmitted = false;
  isInterveiwer = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }
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
      this.isSubmitted = false;
      this.apiService.post("users/create", this.CandidateForm.value).subscribe((res) => {
        console.log(res);
      })
    } else {
      this.isSubmitted = true;
    }
  }

  InterviewerSignup() {
    this.InterviewerForm.value.userRole = "interviewer";
    console.log(this.InterviewerForm.value);
    if (this.InterviewerForm.valid) {
      this.isSubmitted = false;
      this.apiService.post("users/create", this.InterviewerForm.value).subscribe((res) => {
        console.log(res);
      })
    } else {
      this.isSubmitted = true;
    }
  }

}
