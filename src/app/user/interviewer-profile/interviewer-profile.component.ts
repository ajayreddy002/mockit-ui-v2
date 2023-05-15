import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Step {
  label: string;
}

@Component({
  selector: 'app-interviewer-profile',
  templateUrl: './interviewer-profile.component.html',
  styleUrls: ['./interviewer-profile.component.scss'],
})


export class InterviewerProfileComponent implements OnInit {

  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;
  // thirdFormGroup!: FormGroup;
  form!: FormGroup;
  // activeIndex = 0;

  // steps: Step[] = [
  //   { label: 'Step 1' },
  //   { label: 'Step 2' },
  //   { label: 'Step 3' }
  // ];
  step:any = 1
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', [Validators.required, Validators.pattern(/^\d{5}(?:[-\s]\d{4})?$/)]],
        username: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    });

    // this.firstFormGroup = this._formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', Validators.required],
    //   mobile: ['', Validators.required],
    //   dob: ['', Validators.required],
    //   gender: ['', Validators.required],
    //   address: ['', Validators.required],
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
    // this.thirdFormGroup = this._formBuilder.group({
    //   address: ['', Validators.required]
    // });
  }

  
  submit() {
    console.log(this.form.value);
  }
  previous(){
    this.step--;
  }
  next(){
    this.step++;
  }
}