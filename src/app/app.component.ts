import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  forbiddenProjectNames = ['Test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.validateProjectNameSync.bind(this)]),
      'email': new FormControl(null, Validators.email),
      'projectStatus': new FormControl('Stable')
    });
  }

  onSubmit(): void {
    console.log(this.projectForm);
  }

  validateProjectNameSync(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'projectNameIsForbidden': true};
    }
    return null;
  }
}
