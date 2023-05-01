import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signupForm! : FormGroup;
  isSubmitted = false;

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userName: ["", Validators.required],
      email: ["", Validators.required],
      mobile: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  submitSignup(){
    if (this.signupForm.valid){
      this.isSubmitted = false;
    }
    else {
      this.isSubmitted = true;
    }
  }
}
