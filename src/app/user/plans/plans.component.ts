import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { LoaderService } from 'src/app/service/loader.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  plansForm!: FormGroup;
  isValid = false;
  allSkills = [
    { label: 'HTML', value: 'HTML' },
    { label: 'CSS', value: 'CSS' },
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'Angular', value: 'Angular' },
    { label: 'React', value: 'React' },
    { label: 'Vue', value: 'Vue' },
    { label: 'Node.js', value: 'Node.js' },
    { label: 'Python', value: 'Python' },
    { label: 'Java', value: 'Java' },
    { label: 'c', value: 'c' },
    { label: 'c++', value: 'c++' },
    { label: 'c#', value: 'c#' },
    { label: 'PHP', value: 'PHP' },
    { label: 'TypeScript', value: 'TypeScript' },
    { label: 'Ruby', value: 'Ruby' },
    { label: 'Swift', value: 'Swift' },
    { label: 'Express.js', value: 'Express.js' },
    { label: 'ASP.NET', value: 'ASP.NET' },
    { label: 'Django', value: 'Django' },
    { label: 'Laravel', value: 'Laravel' },
    { label: 'Android Development', value: 'Android Development' },
    { label: 'iOS', value: 'iOS' },
    { label: 'Flutter', value: 'Flutter' },
    { label: 'React Native', value: 'React Native' },
    { label: 'Kotlin', value: 'Kotlin' },
    { label: 'SQL', value: 'SQL' },
    { label: 'MySQL', value: 'MySQL' },
    { label: 'PostgreSQL', value: 'PostgreSQL' },
    { label: 'MongoDB', value: 'MongoDB' },
    { label: 'Oracle', value: 'Oracle' },
    { label: 'SQLite', value: 'SQLite' },
    { label: 'Amazon Web Services (AWS)', value: 'Amazon Web Services (AWS)' },
    { label: 'Microsoft Azure', value: 'Microsoft Azure' },
    { label: 'Google Cloud Platform (GCP)', value: 'Google Cloud Platform (GCP)' },
    { label: 'DevOps', value: 'DevOps' },
    { label: 'Docker', value: 'Docker' },
    { label: 'Kubernetes', value: 'Kubernetes' },
    { label: 'Git', value: 'Git' },
    { label: 'GitHub', value: 'GitHub' },
    { label: 'Bitbucket', value: 'Bitbucket' },
    { label: 'RESTful APIs', value: 'RESTful APIs' },
    { label: 'GraphQL', value: 'GraphQL' },
    { label: 'Serverless Architecture', value: 'Serverless Architecture' },
    { label: 'Microservices', value: 'Microservices' },
    { label: 'Unit Testing', value: 'Unit Testing' },
    { label: 'Test Automation', value: 'Test Automation' },
    { label: 'Selenium', value: 'Selenium' },
    { label: 'Jest', value: 'Jest' },
    { label: 'JUnit', value: 'JUnit' },
    { label: 'TensorFlow', value: 'TensorFlow' },
    { label: 'Keras', value: 'Keras' },
    { label: 'PyTorch', value: 'PyTorch' },
    { label: 'Scikit-learn', value: 'Scikit-learn' },
    { label: 'Natural Language Processing (NLP)', value: 'Natural Language Processing (NLP)' },
    { label: 'Network Security', value: 'Network Security' },
    { label: 'Encryption', value: 'Encryption' },
    { label: 'Penetration Testing', value: 'Penetration Testing' },
    { label: 'Security Auditing', value: 'Security Auditing' },
    { label: 'Scrum', value: 'Scrum' },
    { label: 'Kanban', value: 'Kanban' },
    { label: 'Agile Project Management', value: 'Agile Project Management' },
    { label: 'Adobe XD', value: 'Adobe XD' },
    { label: 'Sketch', value: 'Sketch' },
    { label: 'Figma', value: 'Figma' },
    { label: 'User Research', value: 'User Research' },
    { label: 'Integrated Development Environments (IDEs)', value: 'Integrated Development Environments (IDEs)' },
    { label: 'Code Editors (Visual Studio Code, Sublime Text, etc.)', value: 'Code Editors (Visual Studio Code, Sublime Text, etc.)' },
    { label: 'Command-Line Tools', value: 'Command-Line Tools' },
    { label: 'Package Managers (npm, yarn, etc.)', value: 'Package Managers (npm, yarn, etc.)' },
    { label: 'Data Structures', value: 'Data Structures' },
    { label: 'Algorithm Design', value: 'Algorithm Design' },
    { label: 'Computational Thinking', value: 'Computational Thinking' },
  ];

  selectedSkills !: any[];

  filteredSkills!: any[];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.plansForm = this.formBuilder.group({
      category: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(5)]],
      duration: ['30', [Validators.required]],
      description: ['', Validators.required],
      programming: ['', Validators.required],
      skills: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  filterSkill(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.allSkills.length; i++) {
      let country = (this.allSkills as any[])[i];
      if (country.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredSkills = filtered;
  }

  submitForm() {
    this.loaderService.showLoader();
    console.log(this.plansForm.controls);
    if (this.plansForm.valid) {
      this.plansForm.get('programming')?.value === 'yes' ? this.plansForm.get('programming')?.setValue(true) : this.plansForm.get('programming')?.setValue(false)
      this.isValid = false;
      this.apiService.post('common/plan', this.plansForm.value).subscribe((res) => {
        console.log(res);
        this.loaderService.hideLoader();
      }, (error) => {
        console.log("Api Error: ", error);
        this.loaderService.hideLoader();
      })
      this.router.navigate(['/user/interview'])
    } else {
      console.log("form Invalid");
      this.isValid = true;
      this.loaderService.hideLoader();
    }
  }
}
