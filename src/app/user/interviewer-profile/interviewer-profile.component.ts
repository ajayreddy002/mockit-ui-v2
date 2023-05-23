import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interviewer-profile',
  templateUrl: './interviewer-profile.component.html',
  styleUrls: ['./interviewer-profile.component.scss'],
})


export class InterviewerProfileComponent implements OnInit {

  pdForm!: FormGroup;
  eqForm!: FormGroup;
  expForm!: FormGroup;
  rForm!: FormGroup;
  ipForm!: FormGroup;
  step: any = 1;
  isStep1Valid: boolean = false;
  isStep4Valid: boolean = false;
  isStep5Valid: boolean = false;

  degrees: string[] = ['BTech', 'BE', 'MCA', 'MBA', 'MTech', 'ME', 'Others']; // Available degree options
  courses: { [key: string]: string[] } = {
    'BTech': ['Information Technology', 'Computer Science and Engineering', 'Electronics and Communication Engineering', 'Electrical and Electronics Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Automobile Engineering', 'Others'],
    'BE': ['Information Technology', 'Computer Science and Engineering', 'Electronics and Communication Engineering', 'Electrical and Electronics Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Automobile Engineering', 'Others'],
    'MCA': ['Computers'],
    'MBA': ['HR', 'Finance', 'Marketing'],
    'MTech': ['Information Technology', 'Computer Science and Engineering', 'Electronics and Communication Engineering', 'Electrical and Electronics Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Automobile Engineering', 'Others'],
    'ME': ['Information Technology', 'Computer Science and Engineering', 'Electronics and Communication Engineering', 'Electrical and Electronics Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Automobile Engineering', 'Others'],
    'Others': []
  };

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.pdForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      languages: [''],
    });
    this.eqForm = this.fb.group({
      college: [''],
      degree: [''],
      course: [''],
      yop: [''],
      achievements: [''],
      awards: [''],
      additionalData: [''],
    });
    this.expForm = this.fb.group({
      title: [''],
      company: [''],
      jobSummary: [''],
      experience: [''],
      expertise: [''],
    });
    this.rForm = this.fb.group({
      resume: ['', Validators.required],
      linkedIn: ['', Validators.required],

    });
    this.ipForm = this.fb.group({
      interview: ['', Validators.required]
    });
  }

  submit() {
    if (this.pdForm.valid) {
      console.log(this.pdForm);
    }
  }

  getCoursesForDegree(degree: string): string[] {
    return this.courses[degree] || [];
  }

  previous() {
    this.step--;
  }
  next() {
    console.log(this.pdForm);
    if (this.pdForm.valid && this.step == 1) {
      this.step = 2;
      this.isStep1Valid = true;
      return this.step;
    }
    else {
      this.isStep1Valid = true;
    }

    if (this.pdForm.valid && this.eqForm.valid && this.step == 2) {
      this.step = 3;
      return this.step;
    }

    if (this.pdForm.valid && this.eqForm.valid && this.expForm.valid && this.step == 3) {
      this.step = 4;
      this.isStep4Valid = false;
      return this.step
    }
    else {
      this.isStep4Valid = true;
    }

    if (this.pdForm.valid && this.eqForm.valid && this.expForm.valid && this.rForm.valid && this.step == 4) {
      this.step = 5;
      this.isStep5Valid = false;
      return this.step
    }
    else {
      this.isStep5Valid = true;
    }
  }
}