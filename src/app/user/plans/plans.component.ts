import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit{

  myForm!: FormGroup;
  isValid = false;
  chipsValues: string[] = []

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      category: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(5)]],
      duration: ['30min', [Validators.required]],
      objective: ['', Validators.required],
      programming: ['', Validators.required],
      skills: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.isValid = false;
      this.apiService.post('common/plans', this.myForm.value).subscribe((res) => {
        console.log(res);
      })
      
    } else {
      console.log("form Invalid");
      this.isValid = true;
      
    }
  }
}
